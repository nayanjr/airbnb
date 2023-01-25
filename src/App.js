import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

import './style.css';
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = data.map(item => {
        return(
            <Card 
            key = {item.id}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title = {item.title}
            // price={item.price}
            // openSpots ={item.openSpots}
            {...item}
            />
        )
    }) 
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cardslist">
            {cards}
            </section>
        </div>
        
    )
}