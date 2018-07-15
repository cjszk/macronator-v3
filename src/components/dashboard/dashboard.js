import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './basicInfo';
import Graph from './graph';
import QuickAdd from './quickAdd';

class Dashboard extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="dashboard">
                <div className="dashboard__content">
                    <div className="dashboard__content__left">
                        <BasicInfo/>
                        <QuickAdd />
                    </div>
                    <div className="dashboard__content__right">
                        <Graph />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);
