import React from 'react'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { graphqlClient } from 'src/graphql/client'

import 'src/styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
