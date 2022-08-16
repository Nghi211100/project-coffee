import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://coffeeproject.saleor.cloud/graphql/',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: 'Bearer M5klTpwyTWTkWODfrN6DnuWsPAa7uM',
    },
  }));

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
export default apolloClient;
