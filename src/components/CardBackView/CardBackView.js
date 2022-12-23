    import React from 'react'
    import './CardBackView.css'

    function CardBackView(props) {
    return (
        <div className='CardBackView'>
            <div className='cvc-number'>
                {props.data.cvc}
            </div>
        </div>
    )
    }

    export default CardBackView