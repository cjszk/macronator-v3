import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { selectDate } from '../../actions/calendar';

class ListView extends React.Component {

    render() {
        const dataJSX = this.props.currentUser.data.sort((a, b) => {
            return parseInt(moment.utc(b.date).format('X')) - parseInt(moment.utc(a.date).format('X'))
        }).map((data) => {
            return (
                <li onClick={() => this.props.dispatch(selectDate(data.date))} key={data.id} className="list-view__data">
                    <p className="list-view__data__date">{moment.utc(data.date).format("MMMM Do YYYY")}</p>
                    <p className="list-view__data__calories">{data.calories} kcal</p>
                    <p className="list-view__data__weight">{data.weight} lbs</p>
                </li>
            )
        })

        return (
            <div className="list-view">
                <ul className="list-view__ul">
                    {dataJSX}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(ListView);
