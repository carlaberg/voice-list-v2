import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
    uri: ' /.netlify/functions/graphql',
    cache: new InMemoryCache()
});