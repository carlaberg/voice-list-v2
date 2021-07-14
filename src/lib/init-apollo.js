import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { persistCache } from 'apollo-cache-persist'
import fetch from 'isomorphic-unfetch'
import { setContext } from 'apollo-link-context'
import { clientSideResolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { resolversInitialState } from './resolversInitialState'

// const BASE_URL = process.env.NODE_ENV === 'development' ? process.env.API_HOST : process.env.DEPLOY_URL

export let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
  const localStorage = {}
  localStorage.getItem = 'token'
}

const httpLink = new HttpLink({
  uri: '/.netlify/functions/graphql-api', // Server URL (must be absolute)
  credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('graphcoolToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const clientCache = new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: ['_id']
      }
    }
  })

  //Adding initial state to cache
  clientCache.writeData(resolversInitialState)

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: process.browser ? authLink.concat(httpLink) : httpLink,
    cache: clientCache,
    typeDefs,
    resolvers: clientSideResolvers
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
