import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';

class LandingNavigation extends React.Component {

    demoLogin() {
        console.log('logging in to demo account')
        this.props.dispatch(login('demo1234', 'demo1234'))
    }

    render() {
        return (
            <div className="navigation">
                <h1 className="navigation__title">Macronator</h1>
                <ul className="navigation__ul">
                    <li className="navigation__li">
                        <Link to="/login" onClick={() => this.demoLogin()} className="navigation__li__button">Demo</Link>
                    </li>
                    <li className="navigation__li">
                        <Link className="navigation__li__button" to="/login">
                            Log in
                        </Link>
                    </li>
                    <li className="navigation__li">
                        <Link className="navigation__li__button" to="/registration">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
});

export default connect(mapStateToProps)(LandingNavigation);
