import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ApolloProvider } from "@apollo/client";
import { client } from './lib/apollo-client'

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);