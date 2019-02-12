import {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './App.css';
import Routes from './Routes';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
});
class App extends Component {
    render() {
        return (
            < ApolloProvider
        client = {client} >
            < Router >
            < Routes / >
            < /Router>
            < /ApolloProvider>
    )
        ;
    }
}

export default App;
