import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        // console.log('trigger component');
        axios.get('/posts')
        .then(response => {
            // console.log('response', response);
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts});
            // console.log( response );
        })
        .catch(error => {
            // console.log(error);
            this.setState({error: true});
        });
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <Post
                            // key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>);
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Posts;