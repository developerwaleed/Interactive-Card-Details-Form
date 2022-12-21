import React from 'react'
import './Form.css'

function Form() {
  return (
    <form>
        <label>
            <div>CARDHOLDER NAME</div>
            <input type="text" name="name" placeHolder="e.g. Jane Appleaseed" className='input-fields'/>
        </label>
        <label>
            <div>CARD NUMBER</div>
            <input type="text" name="name" placeHolder="e.g 1234 5678 9123 0000" className='input-fields'/>
        </label>
        <label className='date-cvc-label'>
            <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
            <input type="number" placeholder='MM' name="name" className='input-fields month-field'/>
            <input type="number" placeholder='YY' name="name" className='input-fields year-field'/>
            <input type="number" placeholder='e.g. 123' name="name" className='input-fields CVC-field'/>
        </label>
        <button className='btn-primary'>
          Confirm
        </button>
    </form>
  )
}
export default Form