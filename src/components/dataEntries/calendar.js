import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { changeMonth, changeYear, toggleCalendar } from '../../actions/calendar';
import Days from './days';
import Dates from './dates';

import backArrow from '../../styles/images/PNG/002-back.png';
import nextArrow from '../../styles/images/PNG/001-next.png';

class Calendar extends React.Component {

    toggleCalendar() {
        this.props.dispatch(toggleCalendar('weekly'))
    }

    render() {
        let currentMonth = this.props.selectedMonth;
        let currentYear = this.props.selectedYear;
        const component = this;
        const monthYear = moment(String(`${currentYear}-${currentMonth}`)).format('MMMM YYYY');
        function increment() {
            currentMonth ++
            if (currentMonth > 12) {
                currentMonth = 1
                component.props.dispatch(changeYear(Number(currentYear) + 1))
            }
            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth
            }
            component.props.dispatch(changeMonth(currentMonth))
        }
        function decrement() {
            currentMonth --
            if (currentMonth < 1) {
                currentMonth = 12
                component.props.dispatch(changeYear(Number(currentYear) - 1))
            }
            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth
            }
            component.props.dispatch(changeMonth(currentMonth))
        }
        return (
            <div className="calendar">
                <div className="calendar__header-row">
                    <a className="calendar__header-row__button"><img onClick={decrement} className="main__previous__button" src={backArrow}/></a>
                    <h2 className="calendar__header-row__header">{monthYear}</h2>
                    <a className="calendar__header-row__button"><img onClick={increment} className="main__previous__button" src={nextArrow}/></a>
                </div>
                <Days/>
                <Dates/>         
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedMonth: state.calendar.selectedMonth,
        selectedYear: state.calendar.selectedYear,
        selectedDate: state.calendar.selectedDate,
        calendar: state.calendar.calendar        
    }
};

export default connect(mapStateToProps)(Calendar);