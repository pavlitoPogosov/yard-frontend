import { useMutation } from '@apollo/client'

import { MUTATION_CREATE_USER } from 'src/graphql/mutations/user/user.mutations'

// example of custom apollo hook
export const useCreateUser = () => {
  const result = useMutation(MUTATION_CREATE_USER, { variables: {} })

  return result
}
