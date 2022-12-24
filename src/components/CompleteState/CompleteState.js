import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../../images/icon-complete.svg';
import "./CompleteState.css"

function CompleteState() {
  const navigate = useNavigate();

  return (
    <section className='complete-state'>
    <img src={image} height="70px" width="70px" className='tick-icon'/>
    <h3 className='thankyou-text'>THANK YOU!</h3>
    <p className='tagline'>We've added your card details</p>
    <button  onClick={ () => {navigate('/');}} className='btn-primary btn-complete'>
        Confirm
    </button>
    </section>
  )
}

export default CompleteState