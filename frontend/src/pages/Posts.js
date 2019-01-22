import React, {Component} from 'react';
import Layout from "../components/Layout";
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import axios from "axios";
import Button from "@material-ui/core/Button/Button";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

const graphql = axios.create({
    baseURL: 'http://localhost:8000/graphql',
});

const GET_POSTS = `
{
    allPosts {
      edges {
        node {
          id
          title
          content
          excerpt
          image
          comments {
            id
            author{
                username
              }
            content
            timestamp
          }
        }
      }
    }
  }
`;

class Posts extends Component {
    state = {
        posts: null,
        errors: null,
    };

    fetchPosts = () => {
        graphql
            .post('', {query: GET_POSTS})
            .then(result => {
                console.log(result);
                    this.setState(() => ({
                        posts: result.data.data.allPosts.edges,
                        errors: result.data.errors,
                    }))
                }
            );
    };

    componentDidMount(){
        this.fetchPosts();
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Layout>
                {this.state.posts &&
                        this.state.posts.map(post => (
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                    />
                    <CardHeader>
                        <Typography component="h3">
                            {post.node.excerpt}
                        </Typography>
                    </CardHeader>
                    <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    </CardActions>
                </Card>
                        ))}
      </Layout>
      </div>
    );
    }
}

export default withStyles(styles)(Posts);