import React from 'react'
import './Form.css'

function Form(props) {

  const handleData = (e) => {
    if (e.target.name === 'month') {
      e.target.value = e.target.value.slice(0, 2);
      props.HandlesetData({ ...props.data, month: e.target.value })
    }
    if (e.target.name === 'year') {
      e.target.value = e.target.value.slice(0, 2);
      props.HandlesetData({ ...props.data, year: e.target.value })
    }
    if (e.target.name === 'cvc') {
      e.target.value = e.target.value.slice(0, 3);
      props.HandlesetData({ ...props.data, cvc: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('credit-card-form');
    if (form.elements['CardHolderName'].value.length === 0) {
      const errorField = document.getElementById('NameError');
      errorField.innerHTML = "Can't be Blank";
    }
    if (form.elements['cardNumber'].value.length === 0) {
      const errorField = document.getElementById('CardNumberError');
      errorField.innerHTML = "Can't be Blank";
    }
    if (/\d/.test(form.elements['cardNumber'].value)) {
      const errorField = document.getElementById('CardNumberError');
      errorField.innerHTML = "Field Can only contains Number";
    }
    if (form.elements['month'].value.length === 0) {
      const errorField = document.getElementById('ExpiryError');
      errorField.innerHTML = "Can't be Blank";
    }
    if (form.elements['year'].value.length === 0) {
      const errorField = document.getElementById('ExpiryError');
      errorField.innerHTML = "Can't be Blank";
    }
    if (form.elements['cvc'].value.length === 0) {
      const errorField = document.getElementById('cvcError');
      errorField.innerHTML = "Can't be Blank";
    }
  }

  return (
    <form id='credit-card-form'>
      <label>
        <div>CARDHOLDER NAME</div>
        <input type="text" name="CardHolderName" maxlength="25" placeHolder="e.g. Jane Appleaseed" onChange={(ev) => props.HandlesetData({ ...props.data, name: ev.target.value })} className='input-fields' />
        <div id="NameError" className='errorDiv'></div>
      </label>
      <label>
        <div>CARD NUMBER</div>
        <input type="text" name="cardNumber" maxlength="19" placeHolder="e.g 1234 5678 9123 0000" onChange={(ev) => props.HandlesetData({ ...props.data, cardNumber: ev.target.value })} className='input-fields' />
        <div id="CardNumberError" className='errorDiv'></div>
      </label>
      <label className='date-cvc-label'>
        <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
        <input type="number" placeholder='MM' name="month" onChange={handleData} className='input-fields month-field' />
        <div id="ExpiryError" className='errorDiv SpecialerrorDiv'></div>
        <input type="number" placeholder='YY' name="year" maxlength="2" onChange={handleData} className='input-fields year-field' />
        <input type="number" placeholder='e.g. 123' name="cvc" maxlength="3" onChange={handleData} className='input-fields CVC-field' />
        <div id="cvcError" className='errorDiv SpecialerrorDiv'></div>
      </label>
      <button onClick={handleSubmit} className='btn-primary'>
        Confirm
      </button>
    </form>
  )
}
export default Form