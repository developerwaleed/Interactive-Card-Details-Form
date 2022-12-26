import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css'

function Form(props) {

  let [errorMessages, setErrorMessages] = useState({});

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
    let isError = false;
    e.preventDefault();
    const form = e.target;
    if (form.elements['CardHolderName'].value.length === 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, name:'Cant be Blank' }));
      }
      if (form.elements['cardNumber'].value.length === 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, cardNumber:'Cant be Blank' }));
      }
      if (!(/^[0-9\s]+$/.test(form.elements['cardNumber'].value)) && form.elements['cardNumber'].value.length !== 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, cardNumber:"Field can only contain numbers"}));
      }
      if (form.elements['month'].value.length === 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, expiryError:"Can't be Blank"}));
      }
      if (form.elements['year'].value.length === 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, expiryError:"Can't be Blank"}));
      }
      if (form.elements['cvc'].value.length === 0) {
        isError= true;
        setErrorMessages(errorMessages=> ({ ...errorMessages, cvcErrors:"Can't be Blank"}));
        console.table("errors:",errorMessages)
      }
      setTimeout(() => {
        setErrorMessages({});
      }, 3000);
      if(!isError)
      {
          navigate('/data-submit-success');

      }
  }

  return (
    <form id='credit-card-form' onSubmit={handleSubmit}>
      <label>
        <div>CARDHOLDER NAME</div>
        <input type="text" name="CardHolderName" maxLength="25" placeholder="e.g. Jane Appleaseed" onChange={(ev) => props.HandlesetData({ ...props.data, name: ev.target.value })} className='input-fields' />
        <div id="NameError" className='errorDiv'>{errorMessages.name}</div>
      </label>
      <label>
        <div>CARD NUMBER</div>
        <input type="text" name="cardNumber" maxLength="19" placeholder="e.g 1234 5678 9123 0000" onChange={handleData} className='input-fields' />
        <div id="CardNumberError" className='errorDiv'>{errorMessages.cardNumber}</div>
      </label>
      <label className='date-cvc-label'>
        <div className='date-cvc-name'>EXP. DATE(MM/YY) <span>CVC</span></div>
        <div id="ExpiryError" className='errorDiv SpecialerrorDiv'>{errorMessages.expiryError}</div>
        <div className='expiry-cvc-fileds'>
        <input type="number" placeholder='MM' name="month" onChange={handleData} className='input-fields month-field' />
        <input type="number" placeholder='YY' name="year" maxLength="2" onChange={handleData} className='input-fields year-field' />
        <input type="number" placeholder='e.g. 123' name="cvc" maxLength="3" onChange={handleData} className='input-fields CVC-field' />
        </div>
        <div id="cvcError" className='errorDiv SpecialerrorDiv'>{errorMessages.cvcErrors}</div>
      </label>
      <input type="submit" className='btn-primary' value="Confirm" />
    </form>
  )
}
export default Form