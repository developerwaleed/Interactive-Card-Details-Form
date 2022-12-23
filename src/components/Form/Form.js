import React from 'react'
import './Form.css'

function Form(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form>
        <label>
            <div>CARDHOLDER NAME</div>
            <input type="text" name="CardHolderName" placeHolder="e.g. Jane Appleaseed" onChange={(ev)=> props.HandlesetData({...props.data, name: ev.target.value})} className='input-fields'/>
        </label>
        <label>
            <div>CARD NUMBER</div>
            <input type="text" name="cardNumber" placeHolder="e.g 1234 5678 9123 0000" onChange={(ev)=> props.HandlesetData({...props.data, cardNumber: ev.target.value})} className='input-fields'/>
        </label>
        <label className='date-cvc-label'>
            <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
            <input type="number" placeholder='MM' name="month" onChange={(ev)=> props.HandlesetData({...props.data, month: ev.target.value})} className='input-fields month-field'/>
            <input type="number" placeholder='YY' name="year" onChange={(ev)=> props.HandlesetData({...props.data, year: ev.target.value})} className='input-fields year-field'/>
            <input type="number" placeholder='e.g. 123' name="cvc" onChange={(ev)=> props.HandlesetData({...props.data, cvc: ev.target.value})} className='input-fields CVC-field'/>
        </label>
        <button onClick={handleSubmit} className='btn-primary'>
          Confirm
        </button>
    </form>
  )
}
export default Form