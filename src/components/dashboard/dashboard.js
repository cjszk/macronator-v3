import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './basicInfo';
import Graph from './graph';
import QuickAdd from './quickAdd';

class Dashboard extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            days: "30"
        }
    }

    render() {
        const component = this;
        try {
            return (
            <div className="dashboard">
                <div className="dashboard__overlay">
                    <div className="dashboard__content">
                        <div className="dashboard__content__left">
                            <BasicInfo/>
                            <QuickAdd />
                        </div>
                        <div className="dashboard__content__right">
                            <div className="dashboard__content__right__graph-container">
                                <Graph days={component.state.days} data={this.props.currentUser.data} />
                                <label className="dashboard__content__right__graph-input__label">Past number of days to show:</label>
                                <input value={component.state.days} onChange={(event) => component.setState({days: event.target.value})} min="7" className="dashboard__content__right__graph-input" type="number"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } catch(e) {
            return (
                <div className="dashboard">
                    <div className="dashboard__content">
                        <div className="dashboard__content__left">
                            <BasicInfo/>
                            <QuickAdd />
                        </div>
                        <div className="dashboard__content__right">
                            <div className="dashboard__content__right__graph-container">
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);
