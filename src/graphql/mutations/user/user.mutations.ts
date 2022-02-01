import gql from 'graphql-tag'

import { FRAGMENT_USER } from '../../fragments/user'

export const MUTATION_CREATE_USER = gql`
  mutation CreateAccountInvite($input: CreateUserInput!) {
    result: createUser(input: $input) {
      ...User
    }
  }

  ${FRAGMENT_USER}
`
