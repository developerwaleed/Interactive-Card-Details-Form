import React from 'react'
import './CardFrontView.css'

export default function CardFrontView(props) {
    return (
<div className="card-front-view">
    <div className='circles'>
        <div className='big-circle'></div>
        <div className='hollow-circle'></div>
    </div>

    <div className='card-information'>
    <div className='card-number'>
    {props.data.cardNumber}
    </div>
    <div className='card-details'>
        <div>
        {props.data.name}
        </div>
        <div>
           {props.data.month}/{props.data.year}
        </div>
    </div>
    </div>
</div>
            )
}
