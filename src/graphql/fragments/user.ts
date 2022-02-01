import gql from 'graphql-tag'

export const FRAGMENT_USER = gql`
  fragment User on UserType {
    id
  }
`
