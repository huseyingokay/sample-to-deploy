import React from 'react'
import CardItem from '../CardItem/CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>CHECK OUT HIS EPIC DESTINATIONS!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem src="/images/img-9.jpg" text="Explore the hidden waterfall" label="Adventure" path="/accomplishments" />
                        <CardItem src="/images/img-2.jpg" text="Explore the hidden waterfall" label="Adventure" path="/accomplishments" />
                        <CardItem src="/images/img-1.jpg" text="Explore the hidden waterfall" label="Adventure" path="/accomplishments" />
                        <CardItem src="/images/img-3.jpg" text="Explore the hidden waterfall" label="Adventure" path="/accomplishments" />
                        <CardItem src="/images/img-5.jpg" text="Explore the hidden waterfall" label="Adventure" path="/accomplishments" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
