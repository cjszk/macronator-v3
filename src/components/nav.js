import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';

class Navigation extends React.Component {

    render() {
        const component = this;
        function logout() {
            component.props.dispatch(clearAuth());
            clearAuthToken();
        }
        return (
            <div className="navigation">
                <h1 className="navigation__title">Macronator</h1>
                <ul className="navigation__ul">
                    <li className="navigation__li">
                        <Link to="/dashboard" className="navigation__li__button">Dashboard</Link>
                    </li>
                    <li className="navigation__li">
                        <Link to="/data-entries" className="navigation__li__button">Data Entries</Link >
                    </li>
                    <li className="navigation__li">
                        <Link to="/settings" className="navigation__li__button">Settings</Link>
                    </li>
                    <li className="navigation__li">
                        <a onClick={logout} to="/" className="navigation__li__button">Log out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(Navigation));
