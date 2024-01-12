import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_APOLLO_END_POINT,
});


const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default apolloClient;

export const GET_LOCATIONS = gql`
query ExampleQuery {
	rockets {
		id
		description
		name
	}
}
`;