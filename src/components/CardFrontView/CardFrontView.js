import React from 'react'
import './CardFrontView.css'

export default function CardFrontView() {
    return (
<div className="card-front-view">
    <div className='circles'>
        <div className='big-circle'></div>
        <div className='hollow-circle'></div>
    </div>

    <div className='card-information'>
    <div className='card-number'>
        9591 6489 6389 1011
    </div>
    <div className='card-details'>
        <div>
            FELICIA LEIRE
        </div>
        <div>
            09/26
        </div>
    </div>
    </div>
</div>
            )
}
