import React from "react"

export default function Card(props){

    let badgeText 
    if(props.openSpots ===0)
    {
        badgeText = 'SOLD OUT' 
    }
    else if(props.location ==="Online")
    {
        badgeText = 'Online' 
    }

    return(
        <div className="card">
            {badgeText && <div className ="card--badge">{badgeText}</div>}
            <img src = {require(`./images/${props.coverImg}`)} alt ="" className="card--photo" />
            <div className="card--stats">
            <img src = {require('./images/star.png')} alt ="" className="card--star"/>
            <span>{props.rating}</span>
            <span className="gray">({props.stats.reviewCount}) • </span>
            <span className="gray">{props.stats.location}</span>
            </div>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
