import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://wsj9iwfy0m.execute-api.eu-west-1.amazonaws.com/dev/graphql',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();