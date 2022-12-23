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
    {props.number}
    </div>
    <div className='card-details'>
        <div>
        {props.name}
        </div>
        <div>
           {props.expiry}
        </div>
    </div>
    </div>
</div>
            )
}
