import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quote from '../Quotes/Quote';
import Card from '@mui/material/Card';
import styled from './AllQuotes.module.css';

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  async function getQuotes() {
    try {
      const res = await axios.get('http://localhost:8000/allquotes');
      setQuotes(res.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className={styled.container}>
      <h1 className={styled.heading}>All Quotes</h1>
      <ul className={styled.quoteList}>
        {quotes.map((quote, index) => (
          <Card key={index} className={styled.quoteCard} variant="outlined">
            <Quote
              author={quote.author}
              text={quote.text}
              id={quote._id}
            />
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default AllQuotes;
