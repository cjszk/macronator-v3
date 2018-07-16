import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './settings-input';
import { required, nonEmpty, matches, length, isTrimmed } from '../../validators';
import { changePassword } from '../../actions/auth';

const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');


export class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            confirm: ''
        }
    }

    onSubmit(password) {
        this.props.dispatch(changePassword(this.props.authToken, password, this.props.userId))
    }

    render() {
        try {
            return (
                <form
                    className="settings__options__change-password__form"
                    onSubmit={event => {
                        event.preventDefault();
                        if (this.state.password === this.state.confirm) {
                            this.onSubmit(this.state.password)
                        }
                    }}>
                    <label className="settings__options__change-password__label" htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        value = {this.state.password}
                        onChange = {(event) => this.setState({password: event.target.value})}
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <label className="settings__options__change-password__label" htmlFor="passwordConfirm">Confirm Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        value = {this.state.confirm}
                        onChange = {(event) => this.setState({confirm: event.target.value})}
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button
                        className="btn settings__options__change-password__button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </form>
            );
        } catch(e) {
            return (<div></div>)
        }

    }
}

export default reduxForm({
    form: 'changePassword',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('changePassword', Object.keys(errors)[0]))
})(ChangePasswordForm);
