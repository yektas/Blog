import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import NewPost from './pages/NewPost';
import Portfolio from './pages/Portfolio';
import Post from './pages/Post';
import Posts from './pages/Posts';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Posts} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/blog/new-post" component={NewPost} />
				<Route exact path="/blog/posts" component={Posts} />
				<Route path="/blog/post/:slug" component={Post} />
				<Route
					render={function() {
						return <h1> Not Found </h1>;
					}}
				/>
			</Switch>
		);
	}
}

export default Routes;
