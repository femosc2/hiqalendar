import React, { Component } from 'react'
import CalendarEvent from './CalendarEvent';
import "./CalendarList.css"

const COLORS = ["cornflowerblue", "lightgreen", "pink", "purple"]

class CalendarList extends Component {



    render() {
        const { events, toggleExtension, filter } = this.props
        const { topic, location, organizer, startTime } = filter
        return (
            <ul>
                {events.filter(event => event.location.toLowerCase().includes(location.toLowerCase()))
                    .filter(event => event.name.toLowerCase().includes(topic.toLowerCase()))
                    .filter(event => event.organizer.toLowerCase().includes(organizer.toLowerCase()))
                    .filter(event => event.time.toLowerCase().includes(startTime.toLowerCase()))
                    .map((event) => <CalendarEvent {...event} key={event.id} bgColor={COLORS[Math.floor(Math.random() * COLORS.length )]}
                    toggleExtension={() => toggleExtension(event.id)} />)}
            </ul>
        )
    }
}

export default CalendarList;