import React, { Component } from 'react'
import "./CalendarEvent.css"


function CalendarEvent({name, day, month, year, time, id}) {
    return (
        <li key={id}>
            <h3> {name} </h3>
            <h4> {time}</h4> 
            <h4> {day} {month} {year} </h4> 
        </li>
    )
}

export default CalendarEvent