import React from 'react'
import "./Spacer.css";


const Spacer = ({title}) => {

    return (
        <div className='spacer-section'>
            <div className='title-container'>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Spacer