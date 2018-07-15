import React from 'react';
import { connect } from 'react-redux';
import QuickAddForm from './quickAdd-form';

class QuickAdd extends React.Component {

    render() {
        return (
            <div className="quick-add">
                <h2 className="quick-add__header">Quick Add</h2>
                <QuickAddForm authToken={this.props.authToken} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(QuickAdd);
