import React, { useRef } from 'react'
import styles from './NewQuote.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styled from '@emotion/styled'

const NewQuote = () => {
  let navigate = useNavigate();

  // for accessing and interacting with DOM elements and for persisting values
  // across renders without causing re-renders.
  const usernameInputRef = useRef();
  const quoteInputRef = useRef();

  const addQuoteHandler = async(e) =>{
    e.preventDefault();
    // console.log(usernameInputRef.current.value)
     // console.log(quoteInputRef.current.value)
    const author = usernameInputRef.current.value;
    const text = quoteInputRef.current.value;
    try{
      const res = await axios.post('http://localhost:8000/addQuotes' , {author , text} )
      console.log(res);
      navigate('/')
    }
    catch(e){
      console.log("cant create a new quote")
    }
  }
  // ...

return (
  <div className={styled.wrapper}>

  <div className='container'>
    <form action="" onSubmit={addQuoteHandler} className={styles.newquote}>
      <div>
        <label htmlFor='author'>Author:</label>
        <input type='text' id="author" ref={usernameInputRef} placeholder="Author's Name"/>
      </div>
      <div>
        <label htmlFor="quote">Quote:</label>
        <textarea id="quote" cols={10} rows={4} ref={quoteInputRef} placeholder="Author's Quote"></textarea>
      </div>
      <button className={styles.submitButton}>Add Quote</button>
    </form>
  </div>
  </div>
);

}

export default NewQuote
