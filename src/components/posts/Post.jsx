import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context'

const Post = (props) => {

    const { id, title, summary, image, date, category } = props.post

    const { theme } = useContext(ThemeContext);
  

    return (
        <div className="d-flex justify-content-around border m-3 p-4" style={theme}>
            <div>
                <h1 className="font-weight-light">{title}</h1>
                <h6 className="font-weight-light">{category.name}</h6>
                <p className="">{summary}</p>
                <h6 className="font-weight-light">{date}</h6>
                <Link to={`/posts/${id}`}>
                <button className="btn btn-outline-dark mt-3" style={theme}>Read more</button>
                </Link>
            </div>
            <div>
                <img src={image} alt="" width="200vw" height="200vh" />
            </div>
        </div>
    )
}
            
       
    

    // return (
    //     <div className="d-flex justify-content-around border m-5 p-4">
    //         <div>
    //             <h1 className="font-weight-light">{ title }</h1>
    //             <h6 className="font-weight-light">{ category.name }</h6>
    //             <p className="">{ summary }</p>
    //             <h6 className="font-weight-light">{ date }</h6>
    //             <Link to={`/posts/${id}`}>
    //                 <button className="btn btn-outline-primary mt-3">Read more</button>
    //             </Link>
    //         </div>
    //         <div>
    //             <img src={ image } alt="" width="200vw" height="200vh" />
    //         </div>
    //     </div>
    // )

export default Post

