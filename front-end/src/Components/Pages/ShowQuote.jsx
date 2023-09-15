import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ShowQuote = () => {
    // useParams hook is part of the React Router library, specifically React Router
    //  v5 and later. It allows you to access route parameters (also known as route "placeholders")
    //  from the URL in your React components. Route parameters are typically used to capture dynamic
    //  parts of a URL, such as an ID or a slug, and use them to determine what content to display.
    const params = useParams();
    let [quote, setQuote] = useState({
        author: '',
        text:''
    })

    async function fetchQuote(){
        const res = await axios.get(`http://localhost:8000/quotes/${params.id}`)
        const {author , text} = res.data;
        console.log(author);
        setQuote({author , text});
    }
    useEffect( ()=>{
        fetchQuote();
    } , [])
  return (
    <div>
        <h2>{quote.author}</h2>
        <p>{quote.text}</p>
    </div>
  )
}

export default ShowQuote
