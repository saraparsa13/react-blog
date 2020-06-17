import React, { Component } from 'react'

import Post from "./Post";
import Header from '../layout/Header';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('/api/posts/')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        return (
            <>
            <Header />
                {
                    this.state.posts.map(post => (
                        <Post post={post} key={post.id} />
                    ))
                }
            </>
        )
    }
}

export default Posts