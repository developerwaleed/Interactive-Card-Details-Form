import React, {useState} from 'react'
import './Form.css'

function Form() {
  let [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data=', data);
  }

  return (
    <form>
        <label>
            <div>CARDHOLDER NAME</div>
            <input type="text" name="CardHolderName" placeHolder="e.g. Jane Appleaseed" onChange={(ev)=> setData({...data, name: ev.target.value})} className='input-fields'/>
        </label>
        <label>
            <div>CARD NUMBER</div>
            <input type="text" name="cardNumber" placeHolder="e.g 1234 5678 9123 0000" onChange={(ev)=> setData({...data, cardNumber: ev.target.value})} className='input-fields'/>
        </label>
        <label className='date-cvc-label'>
            <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
            <input type="number" placeholder='MM' name="month" onChange={(ev)=> setData({...data, month: ev.target.value})} className='input-fields month-field'/>
            <input type="number" placeholder='YY' name="year" onChange={(ev)=> setData({...data, year: ev.target.value})} className='input-fields year-field'/>
            <input type="number" placeholder='e.g. 123' name="cvc" onChange={(ev)=> setData({...data, cvc: ev.target.value})} className='input-fields CVC-field'/>
        </label>
        <button onClick={handleSubmit} className='btn-primary'>
          Confirm
        </button>
    </form>
  )
}
export default Form