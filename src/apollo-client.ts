import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
    uri: ' https://rzoa23w8f0.execute-api.us-east-1.amazonaws.com/dev/graphql',
    cache: new InMemoryCache()
});