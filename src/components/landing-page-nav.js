import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LandingNavigation extends React.Component {

    login() {

    }

    render() {
        return (
            <div className="navigation">
                <h1 className="navigation__title">Macronator</h1>
                <ul className="navigation__ul">
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

});

export default connect(mapStateToProps)(LandingNavigation);
