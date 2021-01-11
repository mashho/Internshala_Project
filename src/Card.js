import React from 'react'
import "./Card.css"
const Card=({title,price,description,buttonTitle}) =>{
    return (
        <div className="card">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="price">
                <h1><bold><span style={{fontSize:"15px"}}>$ </span>{price}</bold></h1>
            </div>
            <div className="description">
                <p><bold>{description}</bold></p>
            </div>
            <div className="buttonsd">
                <div class="outer">
                    <div class="buttons">
                        <div class="text">{buttonTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
