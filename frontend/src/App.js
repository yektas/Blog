import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import './App.css';
import Routes from './Routes';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import ScrollToTop from './utils/ScrollToTop';

const token = localStorage.getItem('token');
const client = new ApolloClient({
	link: createUploadLink({
		uri: process.env.REACT_APP_API_ENDPOINT
		// headers: {
		// 	Authorization: token ? `JWT ${token}` : ''
		// }
	}),
	cache: new InMemoryCache()
});
class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<CloudinaryContext cloudName="yektas">
					<Router>
						<ScrollToTop>
							<Routes />
						</ScrollToTop>
					</Router>
				</CloudinaryContext>
			</ApolloProvider>
		);
	}
}

export default App;
