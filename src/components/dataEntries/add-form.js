import React from 'react';
import { Field, reduxForm, focus, reset } from 'redux-form';
import moment from 'moment';
import Input from './input';
import { required, nonEmpty } from '../../validators';
import { submitData } from '../../actions/entries';
import { refreshEntryForm } from '../../actions/entries';

export class AddForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.date,
            calories: '',
            weight: ''
        }
    }
    onSubmit(values) {
        //Check to see if the date already has an entry
        let check = false;
        this.props.currentUser.data.forEach((data) => {
            if (moment.utc(data.date).format('YYYY-MM-DD') === moment.utc(this.props.date).format('YYYY-MM-DD')) {
                check = true
            }
        })
        if (check === true) {
            //Replace this alert later with a more proper form of feedback
            alert('That date already has an entry!')
            return
        }

        const newData = {
            calories: values.calories,
            weight: values.weight,
            date: this.props.date,
            userId: this.props.currentUser.id
        }
        this.props.dispatch(reset('add'))
        this.props.dispatch(refreshEntryForm());
        return this.props.dispatch(submitData(this.props.authToken, newData));

    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="add__form"
                id="add__form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                {/* <label className="add__label" htmlFor="date">Date</label> */}
                <p className="add__date">{this.props.date}</p>
                {/* <Field
                    component={Input}
                    type="date"
                    name="date"
                    id="date"
                    value={this.state.date}
                    validate={[required, nonEmpty]}
                /> */}
                <label className="add__label" htmlFor="calories">Calories Consumed</label>
                <Field
                    component={Input}
                    type="number"
                    name="calories"
                    id="calories"
                    validate={[required, nonEmpty]}
                />
                <label className="add__label" htmlFor="weight">Weight</label>
                <Field
                    component={Input}
                    type="number"
                    name="weight"
                    id="weight"
                    validate={[required, nonEmpty]}
                />
                <button className="btn add__button"
                    disabled={this.props.pristine || this.props.submitting}>
                    <span className="btn-text" >Submit</span>
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'username'))
})(AddForm);
