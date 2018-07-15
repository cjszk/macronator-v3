import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';

export function LogIn(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <section className="login">
            <div className="login-form">
                <h1>Welcome!</h1>
                <br/>
                <LoginForm />
                <div className="register-line">
                    <br/>Don't have an account? <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to="/registration">Register</Link>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogIn);
