import React, { Component } from 'react'
import "./CalendarEvent.css"

const COLORS = ["cornflowerblue", "lightgreen", "pink", "purple", "blue", "green", "red"]
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];


class CalendarEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: this.setBackgroundColor()
        }
    }

    setBackgroundColor = () => {
        return COLORS[Math.floor(Math.random() * COLORS.length )]
    }

    render() {
        const {name, day, month, year, time, id, organizer, location, endTime, description, extended, toggleExtension} = this.props
        return (
            <li style={{backgroundColor: this.state.bgColor}} onClick={toggleExtension}>
            {!extended && <section>
                <p> {name} </p>
                <h4> {time } {endTime}</h4> 
                <h4> {location} </h4>
                <h4> {day} {MONTHS[month]} {year} </h4> 
            </section>}
            {extended && <section>
                <p> {description} </p>
                <p> {organizer} </p>
            </section>}
            
        </li>
        )
    }
}

export default CalendarEvent