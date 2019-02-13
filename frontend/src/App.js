import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql'
});
class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Routes />
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
