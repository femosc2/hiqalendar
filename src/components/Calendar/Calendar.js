import React, { Component } from 'react'
import CalendarList from './CalendarList';
import CalendarFilterInput from './CalendarFilterInput'
import CalendarDateShower from "./CalendarDateShower"
import CalendarDatePicker from "./CalendarDatePicker"
import Axios from 'axios';


const COLORS = ["cornflowerblue", "lightgreen", "pink", "purple", "blue", "chocolate", "cornsilk", "darksalmon"]

const TODAY = new Date();
class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {
        events: [{
                name: "C#/.NET",
                day: 4,
                month: 6,
                year: 2019,
                time: "09.00",
                id: 0,
                description: "C# och .NET genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Database",
                day: 4,
                month: 6,
                year: 2019,
                time: "10.30",
                id: 1,
                description: "Databas genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Intranätsgenomgång",
                day: 5,
                month: 6,
                year: 2019,
                time: "09.00",
                id: 2,
                description: "Intranätsgenomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Azure",
                day: 8,
                month: 6,
                year: 2019,
                time: "09.00",
                id: 3,
                description: "Azure genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "10.30",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Jira/Webpack",
                day: 8,
                month: 6,
                year: 2019,
                time: "10.30",
                id: 4,
                description: "Jira och webpack genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Scrum",
                day: 8,
                month: 6,
                year: 2019,
                time: "13.00",
                id: 5,
                description: "Scrum genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "14.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "SprintPlanering",
                day: 8,
                month: 6,
                year: 2019,
                time: "14.00",
                id: 6,
                description: "Sprintplanering för andra veckan",
                location: "Hiq Malmös Kontor",
                endTime: "17.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "React Redux / Routing",
                day: 9,
                month: 6,
                year: 2019,
                time: "10.00",
                id: 7,
                description: "React Redux / Routing genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Säkerhet",
                day: 11,
                month: 6,
                year: 2019,
                time: "10.00",
                id: 8,
                description: "Säkerhet genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },
            {
                name: "Sparken",
                day: 11,
                month: 7,
                year: 2019,
                time: "10.00",
                id: 8,
                description: "Säkerhet genomgång",
                location: "Hiq Malmös Kontor",
                endTime: "12.00",
                organizer: "Hiq",
                extended: false,
                bgColor: COLORS[Math.floor(Math.random() * COLORS.length)]
            },

        ],
        filter: {
            location: "",
            topic: "",
            organizer: "",
            startTime: ""
        },
        dateShown: {
            month: TODAY.getMonth(),
            year: TODAY.getFullYear()
        },
        usedColors: []
        }
        Axios.get("https://localhost:44347/api/values").then((respone)=> {
            this.setState({events: respone.data})
        })
    }
    colorPicker = () => {
        const {usedColors} = this.state
        const availableColors = COLORS.filter(color => !usedColors.includes(color))
        const chosenColor = availableColors[Math.floor(Math.random() * availableColors.length )]
        if(availableColors.length === 1){
            this.setState({...this.state, usedColors: []})
        }else{
            this.setState({...this.state, usedColors: [...usedColors, chosenColor]})
        }
        console.log(chosenColor)
        return chosenColor
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

    dateChanger = (change) => {
        const { dateShown } = this.state

            const updatedDate =
            change === "increase"
                ? dateShown.month === 11
                ? { year: dateShown.year + 1, month: 0 }
                : { ...dateShown, month: dateShown.month + 1 }
                : dateShown.month === 0
                ? { year: dateShown.year - 1, month: 11 }
                : { ...dateShown, month: dateShown.month - 1 };
            this.setState({ dateShown: updatedDate });
    }

    render() {
        const { events, filter, dateShown } = this.state
        return (
            <section>
            <CalendarDateShower dateShown={dateShown} />
            <CalendarDatePicker dateChanger={this.dateChanger} />
                <CalendarFilterInput filter={this.filter}/>
                <CalendarList events={events} dateShown={dateShown} toggleExtension={this.toggleExtension} filter={filter}   />
            </section>
            
        )
    }
}

export default Calendar;