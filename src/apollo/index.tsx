import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const token = localStorage.getItem('token');

const wsLink = typeof window === undefined
  ? new GraphQLWsLink(createClient({
      url: process.env.NEXT_PUBLIC_WEBSOCKET_URL as any,   
      connectionParams: {
        authToken: token
      }
    }))
  : null;

const linkUrl = new HttpLink({uri: process.env.NEXT_PUBLIC_BACKEND_URL});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const splitLink = typeof window === undefined
  ? split(
      ({ query }) => {
        let definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink as any,
    )
  : linkUrl;

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
