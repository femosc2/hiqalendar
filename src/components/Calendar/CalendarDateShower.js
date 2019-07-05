import React from 'react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const CalendarDatePicker = ({dateShown}) => {
    return <h1> {MONTHS[dateShown.month]} {dateShown.year} </h1>
}

export default CalendarDatePicker