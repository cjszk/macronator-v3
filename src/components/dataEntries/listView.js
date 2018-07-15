import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { selectDate } from '../../actions/calendar';

class ListView extends React.Component {

    render() {
        const dataJSX = this.props.currentUser.data.map((data) => {
            return (
                <li onClick={() => this.props.dispatch(selectDate(data.date))} key={data.id} className="list-view__data">
                    <p className="list-view__data__date">{moment.utc(data.date).format("MMMM Do YYYY")}</p>
                    <p className="list-view__data__calories">{data.calories} lbs</p>
                    <p className="list-view__data__weight">{data.weight} kcal</p>
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
