import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://coffeeproject.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
});
export default apolloClient;
