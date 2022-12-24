import React from 'react'
import image from '../../images/icon-complete.svg';
import "./CompleteState.css"

function CompleteState() {
  return (
    <section className='complete-state'>
    <img src={image} height="70px" width="70px" className='tick-icon'/>
    <h3 className='thankyou-text'>THANK YOU!</h3>
    <p className='tagline'>We've added your card details</p>
    <button  className='btn-primary btn-complete'>
        Confirm
    </button>
    </section>
  )
}

export default CompleteState