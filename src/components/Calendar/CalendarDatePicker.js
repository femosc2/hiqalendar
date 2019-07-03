import React, { Component } from 'react'

const CalendarDatePicker = ({dateChanger}) => {
    return (
        <div>
            <i onClick={() => dateChanger("increase")}> + </i>
            <i onClick={() => dateChanger("decrease")}> - </i>
        </div>    
    )
    
}

export default CalendarDatePicker