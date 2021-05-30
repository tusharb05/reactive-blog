import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const {id} = useParams();
    const {blogs, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    
    const history = useHistory();

    const handleDelete = (e) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">

            {isPending && <div className="parent-loader"><img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="Loading gif" className="loader"/></div>}
            
            {error && <div>{error}</div>}

            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>By: {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
