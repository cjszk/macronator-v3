import React from 'react';

export default class Days extends React.Component {
    
    render() {
        return (
            <ul className="calendar__days">
                <li className="calendar__days__day">SUN</li>
                <li className="calendar__days__day">MON</li>
                <li className="calendar__days__day">TUE</li>
                <li className="calendar__days__day">WED</li>
                <li className="calendar__days__day">THU</li>
                <li className="calendar__days__day">FRI</li>
                <li className="calendar__days__day">SAT</li>
            </ul>
        )
    }

}

//const mapStateToProps = state => ({})

//export default withRouter(connect(mapStateToProps)(Nav))