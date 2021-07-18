import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { clientSideResolvers } from './resolvers'
import { resolversInitialState } from './resolversInitialState'

const httpLink = createHttpLink({
  uri: '/.netlify/functions/graphql', // Server URL (must be absolute)
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

const clientCache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: ['_id']
    }
  }
})

//Adding initial state to cache
clientCache.writeQuery(resolversInitialState)

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: clientCache,
    resolvers: clientSideResolvers
});