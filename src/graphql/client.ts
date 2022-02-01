import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  defaultDataIdFromObject,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import { GRAPHQL_URI } from 'src/utils/configUtils'

import { createAccessTokenContextLink } from './links/createAccessTokenLink'

interface ICreateApolloCacheProps {
  restoreCache?: NormalizedCacheObject
}

const createApolloCache = ({
  restoreCache,
}: ICreateApolloCacheProps = {}): InMemoryCache => {
  const cache = new InMemoryCache({
    dataIdFromObject(value) {
      return defaultDataIdFromObject(value)
    },
  })

  if (restoreCache) {
    cache.restore(restoreCache)
  }

  return cache
}

interface ICreateApolloClientProps {
  uri: string
}

const createApolloClient = ({ uri }: ICreateApolloClientProps) => {
  const httpLink = createHttpLink({ uri })
  const accessToken = createAccessTokenContextLink()

  return new ApolloClient({
    cache: createApolloCache(),
    link: ApolloLink.from([accessToken, httpLink]),
  })
}

export const graphqlClient = createApolloClient({ uri: GRAPHQL_URI })
