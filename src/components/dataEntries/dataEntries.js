import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Calendar from './calendar';
import ListView from './listView';

class DataEntries extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            view: 'calendar'
        }
    }

    changeView() {
        if (this.state.view === 'calendar') {
            this.setState({view: 'list'})
        } else {
            this.setState({view: 'calendar'})
        }
    }

    render() {
        try {
            let calories = null;
            let weight = null;
            this.props.currentUser.data.forEach((data) => {
                if (moment.utc(data.date).format('YYYY-MM-DD') === moment.utc(this.props.selectedDate).format('YYYY-MM-DD')) {
                    calories = data.calories;
                    weight = data.weight;
                }
            })
            if (this.state.view === 'calendar') {
                if (calories || weight) {
                    return (
                        <div className="data-entries">
                            <div className="data-entries__left">
                                <a onClick={() => this.changeView()} className="data-entries__toggle">Toggle List View</a>
                                <Calendar/>
                            </div>
                            <div className="data-entries__right">
                                <div className="data-entries__selected">
                                    <h3 className="data-entries__selected__header">Selected: {moment.utc(this.props.selectedDate).format("MMMM Do YYYY")}</h3>
                                    <ul className="data-entries__selected__ul">
                                        <li className="data-entries__selected__calories">{calories} kcal</li>
                                        <li className="data-entries__selected__weight">{weight} lbs</li>
                                    </ul>
                                    <a className="data-entries__selected__edit">Edit Entry</a>
                                    <a className="data-entries__selected__delete">Delete Entry</a>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="data-entries">
                            <div className="data-entries__left">
                                <a onClick={() => this.changeView()} className="data-entries__toggle">Toggle List View</a>
                                <Calendar/>
                            </div>
                            <div className="data-entries__right">
                                <div className="data-entries__selected">
                                    <h3 className="data-entries__selected__header">Selected: {moment.utc(this.props.selectedDate).format("MMMM Do YYYY")}</h3>
                                    <ul className="data-entries__selected__ul">
                                        <li className="data-entries__selected__calories">There is no entry for this day!</li>
                                    </ul>
                                    <a className="data-entries__selected__add-new">Add New Entry</a>
                                </div>
                            </div>
                        </div>
                    )
                }

            } else {
                if (calories || weight) {
                    return (
                        <div className="data-entries">
                            <div className="data-entries__left">
                                <a onClick={() => this.changeView()} className="data-entries__toggle">Toggle Calendar View</a>
                                <ListView/>
                            </div>
                            <div className="data-entries__right">
                                <div className="data-entries__selected">
                                    <h3 className="data-entries__selected__header">Selected: {moment.utc(this.props.selectedDate).format("MMMM Do YYYY")}</h3>
                                    <ul className="data-entries__selected__ul">
                                        <li className="data-entries__selected__calories">{calories} kcal</li>
                                        <li className="data-entries__selected__weight">{weight} lbs</li>
                                    </ul>
                                    <a className="data-entries__selected__edit">Edit Entry</a>
                                    <a className="data-entries__selected__delete">Delete Entry</a>
                                </div>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="data-entries">
                        <div className="data-entries__left">
                            <a onClick={() => this.changeView()} className="data-entries__toggle">Toggle Calendar View</a>
                            <ListView/>
                        </div>
                        <div className="data-entries__right">
                            <div className="data-entries__selected">
                                <h3 className="data-entries__selected__header">Selected: {moment.utc(this.props.selectedDate).format("MMMM Do YYYY")}</h3>
                                <ul className="data-entries__selected__ul">
                                    <li className="data-entries__selected__calories">There is no entry for this day!</li>
                                </ul>
                                <a className="data-entries__selected__add-new">Add New Entry</a>
                            </div>
                        </div>
                    </div>
                )
            }
        } catch(e) {
            return (
                <div></div>
            )
        }


    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    selectedDate: state.calendar.selectedDate,    
});

export default connect(mapStateToProps)(DataEntries);
