import React, { Component, useState } from 'react'

const CalendarFilterInput = ({filter}) => {
    const [placeHolderText] = useState(
        "Filter Placeholder"
    )
    const handleChange = (event) => {
        filter(event.target.value, event.target.name)
    }
    return <div>
        <label htmlFor="topic">Topic</label>
        <input name="topic" type="text" placeholder={placeHolderText} onChange={handleChange} />
        <label htmlFor="startTime">Start-Time</label>
        <input name="startTime" type="text" placeholder={placeHolderText} onChange={handleChange} />
        <label htmlFor="organizer">organizer</label>
        <input name="organizer" type="text" placeholder={placeHolderText} onChange={handleChange} />
        <label htmlFor="location">Location</label>
        <input name="location" type="text" placeholder={placeHolderText} onChange={handleChange} />

    </div>
    
    }

export default CalendarFilterInput