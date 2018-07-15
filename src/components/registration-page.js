import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <section className="register__parent">
            <div className="register">
                {/* <h1>Register New User</h1> */}
                    <Link className="register__back-button" to="/login">
                        Go Back
                    </Link>
                    <br/>
                <RegistrationForm usernameTaken={props.usernameTaken} />
                <br/>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    usernameTaken: state.auth.usernameTaken
});

export default connect(mapStateToProps)(RegistrationPage);
