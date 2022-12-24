import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Home.css';
import CardFrontView from '../CardFrontView/CardFrontView'
import CardBackView from '../CardBackView/CardBackView'
import CompleteState from '../CompleteState/CompleteState'
import Form from '../Form/Form'

function Home() {
  let [data, setData] = useState({name:'Jane Appleaseed', cardNumber:'0000 0000 0000 0000', month:'02', year:'25', cvc:'564'});
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={(
        <div className='home'>
            <div className='CardBackview-home-div'>
              <CardBackView data={data}/>
            </div>
            <div className='CardFrontview-home-div'>
            <CardFrontView data={data}/>
            </div>
            <div className='formdiv'></div>
            <Form HandlesetData={setData} data={data}/>
        </div>
  )} />
  <Route path="/data-submit-success" element={(
            <div className='home'>
            <div className='CardBackview-home-div'>
              <CardBackView data={data}/>
            </div>
            <div className='CardFrontview-home-div'>
            <CardFrontView data={data}/>
            </div>
            <div className='formdiv'></div>
            {/* <Form HandlesetData={setData} data={data}/> */}
            <CompleteState />
        </div>
)} />
    </Routes>
    </Router>
  )
}

export default Home;