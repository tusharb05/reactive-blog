import React from 'react';
import {Link} from 'react-router-dom';

function BlogList(props) {
    return (
        <div className="blog-list">
            <h2>{props.title}</h2>
            {props.blogList.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList
