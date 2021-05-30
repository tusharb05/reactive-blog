import {useState, useEffect} from 'react';

const useFetch = (url) => { //custom hooks always start with 'use' keyword

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        // console.log('useEffect ran ', name)
        const abort = new AbortController();

        fetch(url, {signal: abort.signal})
            .then(res => {
            if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setBlogs(data);
            setError(null);
        })
        .catch(err => {
            // auto catches network / connection error
            if(err.name === 'AbortError') return;
            setIsPending(false);
            setError(err.message);
        })
        return () => abort.abort();
    }, [url])
    return {blogs, isPending, error}
}

export default useFetch;