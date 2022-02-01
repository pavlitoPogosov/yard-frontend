import { useQuery } from '@apollo/client'

import { QUERY_USER_BY_ID } from 'src/graphql/queries/user/user.queries'

// FIX remake file name on camel case
// example of custom apollo hook
export const useGetUserById = (id: number) => {
  const result = useQuery(QUERY_USER_BY_ID, { variables: { id } })

  return result
}
