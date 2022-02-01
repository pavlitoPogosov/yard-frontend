import { ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// logic for adding token to request here

function getToken() {
  // logic for getting token
  return ''
}

export function createAccessTokenContextLink(): ApolloLink {
  return setContext(async (_, { headers }) => {
    const yourToken = getToken()

    return {
      headers: {
        ...headers,
        authorization: 'Bearer ' + (yourToken || ''),
      },
    }
  })
}
