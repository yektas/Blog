import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import '../node_modules/draft-js/dist/Draft.css';
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <Router>
                <main style={{marginTop: "4rem"}}>
                    <Routes/>
                </main>
            </Router>
        );
    }
}

export default App;
