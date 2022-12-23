import React, {useEffect, useRef} from 'react'
import './Home.css';
import CardFrontView from '../CardFrontView/CardFrontView'
import CardBackView from '../CardBackView/CardBackView'
import Form from '../Form/Form'

function Home() {
  return (
    <div className='home'>
        <div className='CardBackview-home-div'>
          <CardBackView />
        </div>
        <div className='CardFrontview-home-div'>
        <CardFrontView name="Waleed Amjad" expiry="03/26" number="1234 5678 4512 4578"/>
        </div>
        <div className='formdiv'></div>
        <Form />
    </div>
  )
}

export default Home;