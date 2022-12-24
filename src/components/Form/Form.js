import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css'

function Form(props) {

  const navigate = useNavigate();

  const handleData = (e) => {
    if (e.target.name === 'cardNumber') {
     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
      props.HandlesetData({ ...props.data, cardNumber: e.target.value })
    }
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
    if ((form.elements['CardHolderName'].value.length === 0) || (form.elements['cardNumber'].value.length === 0) || !(/^[0-9\s]+$/.test(form.elements['cardNumber'].value)) || (form.elements['month'].value.length === 0) || (form.elements['year'].value.length === 0) || (form.elements['cvc'].value.length === 0) )
    {
    if (form.elements['CardHolderName'].value.length === 0) {
      const NameErrorField = document.getElementById('NameError');
      NameErrorField.innerHTML = "Can't be Blank";
      setTimeout(() => {
        NameErrorField.innerHTML = "";
      }, 3000);
    }
    if (form.elements['cardNumber'].value.length === 0) {
      const cardNumberError = document.getElementById('CardNumberError');
      cardNumberError.innerHTML = "Can't be Blank";
      setTimeout(() => {
        cardNumberError.innerHTML = "";
      }, 3000);
    }
    if (!(/^[0-9\s]+$/.test(form.elements['cardNumber'].value))) {
      const CardNumberError = document.getElementById('CardNumberError');
      CardNumberError.innerHTML = "Field Can only contains Number";
      setTimeout(() => {
        CardNumberError.innerHTML = "";
      }, 3000);
    }
    if (form.elements['month'].value.length === 0) {
      const ExpiryError = document.getElementById('ExpiryError');
      ExpiryError.innerHTML = "Can't be Blank";
      setTimeout(() => {
        ExpiryError.innerHTML = "";
      }, 3000);
    }
    if (form.elements['year'].value.length === 0) {
      const ExpiryError = document.getElementById('ExpiryError');
      ExpiryError.innerHTML = "Can't be Blank";
      setTimeout(() => {
        ExpiryError.innerHTML = "";
      }, 3000);
    }
    if (form.elements['cvc'].value.length === 0) {
      const cvcError = document.getElementById('cvcError');
      cvcError.innerHTML = "Can't be Blank";
      setTimeout(() => {
        cvcError.innerHTML = "";
      }, 3000);
    }
  }
  else 
  {
    navigate('/data-submit-success');
  }
  }

  return (
    <form id='credit-card-form'>
      <label>
        <div>CARDHOLDER NAME</div>
        <input type="text" name="CardHolderName" maxLength="25" placeholder="e.g. Jane Appleaseed" onChange={(ev) => props.HandlesetData({ ...props.data, name: ev.target.value })} className='input-fields' />
        <div id="NameError" className='errorDiv'></div>
      </label>
      <label>
        <div>CARD NUMBER</div>
        <input type="text" name="cardNumber" maxLength="19" placeholder="e.g 1234 5678 9123 0000" onChange={handleData} className='input-fields' />
        <div id="CardNumberError" className='errorDiv'></div>
      </label>
      <label className='date-cvc-label'>
        <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
        <input type="number" placeholder='MM' name="month" onChange={handleData} className='input-fields month-field' />
        <div id="ExpiryError" className='errorDiv SpecialerrorDiv'></div>
        <input type="number" placeholder='YY' name="year" maxLength="2" onChange={handleData} className='input-fields year-field' />
        <input type="number" placeholder='e.g. 123' name="cvc" maxLength="3" onChange={handleData} className='input-fields CVC-field' />
        <div id="cvcError" className='errorDiv SpecialerrorDiv'></div>
      </label>
      <button onClick={handleSubmit} className='btn-primary'>
        Confirm
      </button>
    </form>
  )
}
export default Form