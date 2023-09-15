import React from 'react'
import styles from './Quote.module.css'
import {useNavigate} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
const Quote = (props) => {
  let navigate = useNavigate();
  const showQuoteHandler = (id)=>{
    console.log('trying')
        console.log(`/quotes/${id}`);
        navigate(`/quotes/${id}`)
  }
  return (
    <li className={styles.quote}>
        <span>
            <h4>{props.text}</h4>
            <span>~{props.author}</span>
        </span>
        {/* <IconButton onClick={()=>showQuoteHandler(props.id)} aria-label="delete" size="small">
          <VisibilityIcon fontSize="inherit" />
        </IconButton> */}
        <Button size='small' onClick={()=>showQuoteHandler(props.id)} variant="">View Quote</Button>
        {/* <button ></button> */}
    </li>
  )
}

export default Quote