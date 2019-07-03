import React, { Component } from 'react'
import CalendarEvent from './CalendarEvent';

class Calendar extends Component {
    state = {
        events: [
            {
                name: "C#/.NET",
                day: 4,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 0
            },
            {
                name: "Database",
                day: 4,
                month: "July",
                year: 2019,
                time: "10.30",
                id: 1
            },
            {
                name: "Intranätsgenomgång",
                day: 5,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 2
            },
            {
                name: "Azure",
                day: 8,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 3
            },
            {
                name: "Jira/Webpack",
                day: 8,
                month: "July",
                year: 2019,
                time: "10.30",
                id: 4
            },
            {
                name: "Scrum",
                day: 8,
                month: "July",
                year: 2019,
                time: "13.00",
                id: 5
            },
            {
                name: "SprintPlanering",
                day: 8,
                month: "July",
                year: 2019,
                time: "14.00",
                id: 6
            },
            {
                name: "React Redux / Routing",
                day: 9,
                month: "July",
                year: 2019,
                time: "10.00",
                id: 7
            },
            {
                name: "Säkerhet",
                day: 11,
                month: "July",
                year: 2019,
                time: "10.00",
                id: 8
            },

        ]
    }

    render() {
        const { events } = this.state
        return (
            <ul>
                {events.map((event) => <CalendarEvent {...event} />)}
            </ul>
        )
    }
}

export default Calendar;