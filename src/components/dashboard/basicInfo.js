import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class BasicInfo extends React.Component {

    calculateTDEE(data) {
        function relativeTime(dayOne, dayTwo) {
            const cryptoDateOne = (parseInt(moment(dayOne).format('YYYY')) * 365) + parseInt(moment(dayOne).format('DDD'));
            const cryptoDateTwo = (parseInt(moment(dayTwo).format('YYYY')) * 365) + parseInt(moment(dayTwo).format('DDD'));
            return cryptoDateOne - cryptoDateTwo
        }

        const estimationsArr = [];
        data.sort((a, b) => {return (parseInt(moment.utc(a.date).format('X')) - parseInt(moment.utc(b.date).format('X')))})
        if (data.length > 30) {
            data.slice(0, 30)
        }
        // data.forEach((data) => console.log(data))

        for (let i=1; i<data.length; i++) {
            const weightCaloricFlux = (data[i-1].weight - data[i].weight) * 3500;
            const avgCalorieFlux = weightCaloricFlux / relativeTime(data[i].date, data[i-1].date)
            const estimatedTDEE = data[i].calories + avgCalorieFlux
            
            estimationsArr.push(estimatedTDEE)
        }
        const result = (estimationsArr.reduce((a, b) => a+b)) / estimationsArr.length
        return result
    }

    render() {
        try {
            const TDEE = this.calculateTDEE(this.props.currentUser.data);
            let factor = 1;
            if (this.props.currentUser.goal === 'Cut') {
                factor = .8
            } else if (this.props.currentUser.goal === 'Gain') {
                factor = 1.075
            }
            return (
                <div className="basic-info">
                    <ul className="basic-info__ul">
                        <li className="basic-info__goal">
                            <p className="basic-info__goal__label">Current Goal:</p>
                            <p className="basic-info__goal__info">{this.props.currentUser.goal}</p>
                        </li>
                        <li className="basic-info__tdee">
                            <p className="basic-info__tdee__label">Est. TDEE:</p>
                            <p className="basic-info__tdee__info">{Math.round(TDEE)}</p>
                        </li>
                        <li className="basic-info__recommended">
                            <p className="basic-info__tdee__label">Recommended:</p>
                            <p className="basic-info__tdee__info">{Math.round(TDEE * factor)}</p>
                        </li>
                    </ul>
                </div>
            )
        } catch (e) {
            return (
                <div className="basic-info">
                    <ul className="basic-info__ul">
                        <li className="basic-info__goal">
                            <p>Current Goal:</p>
                            <p></p>
                        </li>
                        <li className="basic-info__tdee"></li>
                        <li className="basic-info__recommended"></li>
                    </ul>
                </div>
            )
        }

    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(BasicInfo);
