function requireEnv(variable: string | undefined, name: string) {
  if (typeof variable === 'undefined') {
    throw new Error(`Variable ${name} is required`)
  }
  return variable
}

export const GRAPHQL_URI = requireEnv(
  process.env['NEXT_PUBLIC_GRAPHQL_URI'],
  'NEXT_PUBLIC_GRAPHQL_URI'
)
