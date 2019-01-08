import Layout from '../components/Layout';
import React, {Component} from 'react';
//import PostEditor1 from '../components/PostEditor1';
import PostEditor2 from '../components/PostEditor2';

class About extends Component {
    render() {
        return (
            <Layout>
                <PostEditor2/>
            </Layout>
        );
    }
}

export default About;