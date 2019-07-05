import React from 'react'

const CalendarFilterInput = ({filter}) => {
    const handleChange = (event) => {
        filter(event.target.value, event.target.name)
    }
    return <div>
        <label htmlFor="topic">Topic</label>
        <input name="topic" type="text" placeholder="Topic" onChange={handleChange} />
        <label htmlFor="startTime">Start-Time</label>
        <input name="startTime" type="text" placeholder="09.00" onChange={handleChange} />
        <label htmlFor="organizer">organizer</label>
        <input name="organizer" type="text" placeholder="Organizer" onChange={handleChange} />
        <label htmlFor="location">Location</label>
        <input name="location" type="text" placeholder="Location" onChange={handleChange} />

    </div>
    
    }

export default CalendarFilterInput