import React from 'react';
import { connect } from 'react-redux';

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
    }

    changeSelection(selected) {
        this.setState({selected})
    }

    render() {
        const component = this;
        let selections = (
            <ul className="settings__options">
                <li onClick={() => {component.changeSelection('change-goals')}} className="settings__options__item">
                    <button className="settings__options__button">Change Goals</button>
                </li>
                <li onClick={() => {component.changeSelection('change-password')}} className="settings__options__item">
                    <button className="settings__options__button">Change Account Password</button>
                </li>
                <li onClick={() => {component.changeSelection('user-connections')}} className="settings__options__item">
                    <button className="settings__options__button">User Connections</button>
                </li>
            </ul>
        );
        if (component.state.selected === 'change-goals') {
            selections = (
                <ul className="settings__options">
                    <li onClick={() => {component.changeSelection('change-goals')}} className="settings__options__item">
                        <button className="settings__options__button settings__options__button__selected">Change Goals</button>
                    </li>
                    <li onClick={() => {component.changeSelection('change-password')}} className="settings__options__item">
                        <button className="settings__options__button">Change Account Password</button>
                    </li>
                    <li onClick={() => {component.changeSelection('user-connections')}} className="settings__options__item">
                        <button className="settings__options__button">User Connections</button>
                    </li>
                </ul>
            );
        } else if (component.state.selected === 'change-password') {
            selections = (
                <ul className="settings__options">
                    <li onClick={() => {component.changeSelection('change-goals')}} className="settings__options__item">
                        <button className="settings__options__button">Change Goals</button>
                    </li>
                    <li onClick={() => {component.changeSelection('change-password')}} className="settings__options__item">
                        <button className="settings__options__button settings__options__button__selected">Change Account Password</button>
                    </li>
                    <li onClick={() => {component.changeSelection('user-connections')}} className="settings__options__item">
                        <button className="settings__options__button">User Connections</button>
                    </li>
                </ul>
            );
        } else if (component.state.selected === 'user-connections') {
            selections = (
                <ul className="settings__options">
                    <li onClick={() => {component.changeSelection('change-goals')}} className="settings__options__item">
                        <button className="settings__options__button">Change Goals</button>
                    </li>
                    <li onClick={() => {component.changeSelection('change-password')}} className="settings__options__item">
                        <button className="settings__options__button">Change Account Password</button>
                    </li>
                    <li onClick={() => {component.changeSelection('user-connections')}} className="settings__options__item">
                        <button className="settings__options__button settings__options__button__selected">User Connections</button>
                    </li>
                </ul>
            );
        }
        return (
            <div className="settings">
                <div className="settings__overlay">
                    <div className="settings__left">
                        {selections}
                    </div>
                    <div className="settings__right">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Settings);
