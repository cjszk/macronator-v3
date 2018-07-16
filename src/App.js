import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navigation from './components/nav';
import LandingNavigation from './components/landing-page/landing-page-nav';
import Login from './components/login';
import RegistrationPage from './components/registration-page';
import Dashboard from './components/dashboard/dashboard';
import DataEntries from './components/dataEntries/dataEntries';
import Settings from './components/settings/settings';
import Setup from './components/settings/setup';

class App extends Component {
  render() {
    return (
      <div>

        <Route exact path="/dashboard" component={Navigation} />
        <Route exact path="/data-entries" component={Navigation} />
        <Route exact path="/settings" component={Navigation} />

        <Route exact path="/" component={LandingNavigation} />
        <Route exact path="/login" component={LandingNavigation} />
        <Route exact path="/registration" component={LandingNavigation} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/data-entries" component={DataEntries} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/setup" component={Setup} />

      </div>
    );
  }
}

export default App;
