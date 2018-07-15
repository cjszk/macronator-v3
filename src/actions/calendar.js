export const CHANGE_MONTH = 'CHANGE_MONTH';
export const changeMonth = month => ({
    type: CHANGE_MONTH,
    month
})
export const CHANGE_YEAR = 'CHANGE_YEAR';
export const changeYear = year => ({
    type: CHANGE_YEAR,
    year
})
export const SELECT_DATE = 'SELECT_DATE';
export const selectDate = date => ({
    type: SELECT_DATE,
    date
})

export const SELECT_WEEK = 'SELECT_WEEK';
export const selectWeek = (action) => ({
    type: SELECT_WEEK,
    action
})

export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR';
export const toggleCalendar = (toggle) => ({
    type: TOGGLE_CALENDAR,
    toggle
})