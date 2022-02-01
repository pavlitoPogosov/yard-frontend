/* eslint-disable */
const { loadEnvConfig } = require('@next/env')
loadEnvConfig(process.cwd())

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API,
  documents: null,
  generates: {
    './src/graphql/types.ts': {
      plugins: ['typescript'],
    },
  },
}
