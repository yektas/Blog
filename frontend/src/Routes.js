import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Page404 from "./pages/Page404";
import NewPost from './pages/NewPost';
import Portfolio from './pages/Portfolio';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Test from './pages/Test';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/test" component={Test} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/blog/new-post" component={NewPost} />
				<Route exact path="/blog/posts" component={Posts} />
				<Route path="/blog/post/:slug" component={Post} />
				<Route component={Page404} />
			</Switch>
		);
	}
}

export default Routes;
