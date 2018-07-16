import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './basicInfo';
import Graph from './graph';
import QuickAdd from './quickAdd';
import { Redirect } from 'react-router-dom';

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
            if (this.props.currentUser.goal === 'Not Selected') {
                return <Redirect to="/setup"/>
            }
            if (this.props.currentUser.data < 1) {
                return (
                    <div className="dashboard">
                        <div className="dashboard__overlay">
                            <div className="dashboard__content">
                                <div className="dashboard__content__left">
                                    <div className="basic-info">
                                        <ul className="basic-info__ul">
                                            <li className="basic-info__goal">
                                                <p>Current Goal: {this.props.currentUser.goal}</p>
                                                <br/>
                                                <p className="basic-info__goal__message">You do not currently have <br/> any data to make any calculations</p>
                                            </li>
                                            <li className="basic-info__tdee"></li>
                                            <li className="basic-info__recommended"></li>
                                        </ul>
                                    </div>
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
            } else {
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
            }
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
