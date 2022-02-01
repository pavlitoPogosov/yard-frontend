import gql from 'graphql-tag'

import { FRAGMENT_USER } from '../../fragments/user'

export const QUERY_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    result: userById(id: $id) {
      ...User
    }
  }

  ${FRAGMENT_USER}
`
