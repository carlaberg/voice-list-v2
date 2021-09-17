import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ApolloProvider } from "@apollo/client";
import { client } from './lib/apollo-client'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);