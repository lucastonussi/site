import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: process.env.BACKEND_API
})

console.log(process.env.BACKEND_API)

export default { apolloClient: apolloClient }
