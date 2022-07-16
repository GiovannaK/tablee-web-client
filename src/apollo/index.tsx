import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const token =
  typeof window !== 'undefined' ? localStorage.getItem('loginToken') : null;

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: process.env.NEXT_PUBLIC_WEBSOCKET_URL as any,
        })
      )
    : null;

const linkUrl = new HttpLink({ uri: process.env.NEXT_PUBLIC_BACKEND_URL });
console.log(linkUrl);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('loginToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const splitLink =
  typeof window !== undefined && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === 'OperationDefinition' &&
            def.operation === 'subscription'
          );
        },
        wsLink,
        linkUrl
      )
    : linkUrl;

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

export default client;
