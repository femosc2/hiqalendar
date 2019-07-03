import React, { Component } from 'react'
import CalendarList from './CalendarList';
import CalendarFilterInput from './CalendarFilterInput'


class Calendar extends Component {
    state = {
        events: [{
                name: "C#/.NET",
                day: 4,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 0,
                description: "C# och .NET genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false

            },
            {
                name: "Database",
                day: 4,
                month: "July",
                year: 2019,
                time: "10.30",
                id: 1,
                description: "Databas genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "Intranätsgenomgång",
                day: 5,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 2,
                description: "Intranätsgenomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "Azure",
                day: 8,
                month: "July",
                year: 2019,
                time: "09.00",
                id: 3,
                description: "Azure genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "Jira/Webpack",
                day: 8,
                month: "July",
                year: 2019,
                time: "10.30",
                id: 4,
                description: "Jira och webpack genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "Scrum",
                day: 8,
                month: "July",
                year: 2019,
                time: "13.00",
                id: 5,
                description: "Scrum genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "14.00",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "SprintPlanering",
                day: 8,
                month: "July",
                year: 2019,
                time: "14.00",
                id: 6,
                description: "Sprintplanering för andra veckan",
                location: "Hiq Malmös Kontor",
                endTime: "17.00",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "React Redux / Routing",
                day: 9,
                month: "July",
                year: 2019,
                time: "10.00",
                id: 7,
                description: "React Redux / Routing genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false
            },
            {
                name: "Säkerhet",
                day: 11,
                month: "July",
                year: 2019,
                time: "10.00",
                id: 8,
                description: "Säkerhet genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false
            },

        ],
        filter: {
            location: "",
            topic: "",
            organizer: "",
            startTime: ""
        }
    }

    toggleExtension = id => {
        const events = this.state.events.map(event => event.id === id ? {...event, extended: !event.extended } : event)
        this.setState({
            events
        })
    }
    filter = (text, name) => {
        const { filter } = this.state 
        const newFilter = {...filter, [name]:text}
        this.setState({
            ...this.state,
            filter: newFilter
        })
        console.log(this.state.filter)
    }

    render() {
        const { events, filter } = this.state
        return (
            <section>
                <CalendarFilterInput filter={this.filter}/>
                <CalendarList events={events} toggleExtension={this.toggleExtension} filter={filter}   />
            </section>
            
        )
    }
}

export default Calendar;