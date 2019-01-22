import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Posts from "./pages/Posts";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/new-post" component={NewPost}/>
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/about" component={About}/>
                <Route
                    render={function() {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;
