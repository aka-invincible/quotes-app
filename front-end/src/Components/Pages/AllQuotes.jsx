import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quotes/Quote'
import Card from '@mui/material/Card';


const AllQuotes = () => {

  let [quotes , setQuotes] = useState([])

  async function getQuotes(){
    const res = await axios.get('http://localhost:8000/allquotes')
    // console.log(res.data);
    setQuotes(res.data);
  }

  useEffect( ()=>{
    getQuotes();
  } , [])


  return (
    <div>
      <h1>AllQuotes</h1>

        <ul>
          {
            quotes.map((quote , index)=>{
              return <Card variant="outlined"> <Quote
              key={index}
              author={quote.author}
              text={quote.text}
              id={quote._id}
              />
              </Card>
            })
          }
        </ul>
      
    </div>
  )
}

export default AllQuotes