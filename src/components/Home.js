import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    
    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    //if something named here diff from in that file like data in that and blogs here then we can do in destructuring: data: blogs
    return (
        <div className="home">

            { error && <div>{ error }</div> }

            {isPending && <div className="parent-loader"><img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="Loading gif" className="loader"/></div>}

            {blogs &&  <BlogList blogList={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home
