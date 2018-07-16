import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { API_BASE_URL } from '../../config';

import cover from '../../styles/images/cover.jpg';
import screenshot1 from '../../styles/images/screenshot1.jpg';
import screenshot2 from '../../styles/images/screenshot2.jpg';
import screenshot3 from '../../styles/images/screenshot3.jpg';


class LandingNavigation extends React.Component {

    demoLogin() {
        console.log('logging in to demo account')
        this.props.dispatch(login('demo1234', 'demo1234'))
    }

    wakeHeroku() {
        const component = this;
        console.log('Sending GET request to Heroku server to wake it up.')
        return fetch(`${API_BASE_URL}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${component.props.authToken}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => console.log(res.json()))
        .catch(err => console.error(err))
    }

    componentDidMount() {
        this.wakeHeroku();
    }

    render() {
        return (
            <section className="landing-page">
                <div className="landing-page__cover">
                    <h2 className="landing-page__cover__header">
                        <span className="landing-page__cover__header__one">Find your true caloric requirements.</span>
                        <br/>
                        <span className="landing-page__cover__header__two">No estimations from so-called 'calculators.'</span>
                        <br/>
                        <span className="landing-page__cover__header__three">Just real calculations personalized from your own data.</span>
                    </h2>
                    <img className="landing-page__cover__image" src={cover}/>
                </div>
                <div className="landing-page__about">
                    <div className="landing-page__about__first">
                        <div className="landing-page__about__first__left">
                            <h3 className="landing-page__about__first__header">Calculations always beat estimations</h3>
                            <p className="landing-page__about__first__description">
                                The web is full of calorie calculators... what do they all do? They estimate your
                                calorie needs based off of arbitrary measurements such as your weight and your
                                'perceived' activity levels. They don't actually take in raw data and crunch the numbers.
                                Macronator will do that for you, all you need to do is give it the data to crunch.
                            </p>
                        </div>
                        <div className="landing-page__about__first__right">
                            <img src={screenshot3} className="landing-page__about__first__image" />
                        </div>
                    </div>
                    <div className="landing-page__about__second">
                        <div className="landing-page__about__second__left">
                            <img src={screenshot2} className="landing-page__about__second__image" />
                        </div>
                        <div className="landing-page__about__second__right">
                            <h3 className="landing-page__about__second__header">Constantly Evolving</h3>
                            <p className="landing-page__about__second__description">
                                The calculations never end, so as long as you are a living breathing person
                                who is constantly changing, Macronator's calculations continue to evolve as long as
                                you put more data into it.
                            </p>
                        </div>
                    </div>
                    <div className="landing-page__about__third">
                        <div className="landing-page__about__third__left">
                            <h3 className="landing-page__about__third__header">Pick your goal and achieve it</h3>
                            <p className="landing-page__about__third__description">
                               Trying to lose weight? Trying to gain muscle? Macronator will tell you exactly how many calories
                               you should consume to reach your goal... again, no estimations; just pure calculation from your own personal data.
                            </p>
                        </div>
                        <div className="landing-page__about__third__right">
                            <img src={screenshot1} className="landing-page__about__third__image" />
                        </div>
                    </div>
                </div>
            </section>
        )       
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
});

export default connect(mapStateToProps)(LandingNavigation);
