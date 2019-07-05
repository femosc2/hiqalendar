import React, { Component } from 'react'
import CalendarList from './CalendarList';
import CalendarFilterInput from './CalendarFilterInput'
import CalendarDateShower from "./CalendarDateShower"
import CalendarDatePicker from "./CalendarDatePicker"
import Axios from 'axios';


const COLORS = ["cornflowerblue", "lightgreen", "pink", "purple", "lime", "chocolate", "cornsilk", "darksalmon"]

const TODAY = new Date();
class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {
        events: [],
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
            const withColor = respone.data.map(event => {return {...event, bgColor: this.colorPicker()}})
            this.setState({events: withColor})
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