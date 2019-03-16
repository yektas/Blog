
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from "apollo-upload-client";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import ScrollToTop from "./utils/ScrollToTop";

const client = new ApolloClient({
	link: createUploadLink({
		uri: 'http://localhost:8000/graphql',
	}),
	cache: new InMemoryCache(),
});
class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<ScrollToTop>
						<Routes />
					</ScrollToTop>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
