import { ApolloClient, createNetworkInterface } from 'react-apollo';

export default ({ uri }) => {
  const networkInterface = createNetworkInterface({ uri });
  networkInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {};  // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('authToken');
        req.options.headers.authorization = token ? `Bearer ${token}` : null;
        next();
      }
    }
  ]);
  return new ApolloClient({
    networkInterface,
  });
}