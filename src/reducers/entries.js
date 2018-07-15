import {
    REFRESH_ENTRY_FORM,
    STOP_REFRESH_ENTRY_FORM
} from '../actions/entries';


const initialState = {
    refreshEntryForm: false
};

export default function reducer(state = initialState, action) {
    if (action.type === REFRESH_ENTRY_FORM) {
        return Object.assign({}, state, {
            refreshEntryForm: true
        });
    } else if (action.type === STOP_REFRESH_ENTRY_FORM) {
        return Object.assign({}, state, {
            refreshEntryForm: false
        });
    }

    return state;
}
