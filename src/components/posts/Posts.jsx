import React, { Component, useContext } from 'react'

import Post from "./Post";
import Header from '../layout/Header';
import { Consumer, themes, ThemeContext } from '../../context';

class Posts extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       theme: themes.light,
    //     };
    
    //     this.toggleTheme = () => {
    //       this.setState(state => ({
    //         theme:
    //           state.theme === themes.dark
    //             ? themes.light
    //             : themes.dark,
    //       }));
    //     };
    //   }

    state = {
        posts: []
    }


    componentDidMount() {
        const token = localStorage.getItem('token')

        fetch('/api/posts/', { method: "GET", headers: { 'Authorization': `Token ${token}` } })
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
                {/* <Header /> */}
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