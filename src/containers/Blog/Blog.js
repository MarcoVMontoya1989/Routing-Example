import React, { Component } from 'react';
import './Blog.css';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
class Blog extends Component {

    render () {
        // let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        // if (!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post
        //             key={post.id}
        //             title={post.title}
        //             author={post.author}
        //             clicked={() => this.postSelectedHandler(post.id)} />;
        //     });
        // }

        return (
            <div >
                <header className="Blog">
                    <nav>
                        <ul>
                            {/*<li><a href="/">Home</a></li>*/}
                            {/*<li><a href="/new-post">New Post</a></li>*/}
                            {/*<li><Link to='/'>Home</Link></li>*/}
                            {/*<li><Link to={{*/}
                            {/*    pathname: this.props.match.url + '/new-post',*/}
                            {/*    hash: '#submit',*/}
                            {/*    search: '?quick-submit=true'*/}
                            {/*}}>New Post</Link></li>*/}
                            <li><NavLink to='/posts/' exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/" exact component={Posts} />*/}
                <Route path="/posts" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Redirect from={'/'} to={'/posts'}/>
                </Switch>


            </div>
        );
    };
}

export default Blog;