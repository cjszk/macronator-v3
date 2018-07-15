import moment from 'moment';
import { CHANGE_MONTH, CHANGE_YEAR, SELECT_DATE, SELECT_WEEK, TOGGLE_CALENDAR } from '../actions/calendar';

const currentYear = moment().format('YYYY');
const currentMonth = moment().format('MM');
const currentDay = moment().format('DD');

const previousMonthDate = moment(`${currentYear}-${currentMonth}`).subtract(1, 'months').endOf('month').format('YYYY-MM-DD')

const firstDayOfMonth = moment(`${currentYear}-${currentMonth}`).startOf('month').format('e');
const maxDaysPrevious = moment(`${previousMonthDate}`).daysInMonth();

let monthBuffer = 0;
for (let i=maxDaysPrevious; i>maxDaysPrevious-firstDayOfMonth; i--) {
    monthBuffer ++;
}
const currentDayValue = Number(monthBuffer) + Number(currentDay);
let currentWeekValue;
if (currentDayValue <= 7) {
    currentWeekValue = 1;
} else if (currentDayValue <= 14) {
    currentWeekValue = 2;
} else if (currentDayValue <= 21) {
    currentWeekValue = 3;
} else if (currentDayValue <= 28) {
    currentWeekValue = 4;
} else if (currentDayValue <= 35) {
    currentWeekValue = 5;
}

const initialState = {
    selectedMonth: moment().format('MM'),
    selectedYear: moment().format('YYYY'),
    selectedDate: moment().format('YYYY-MM-DD'),
    selectedWeek: currentWeekValue,
    calendar: 'monthly'
};

export default function reducer(state = initialState, action) {
    if (action.type === CHANGE_MONTH) {
        return Object.assign({}, state, {
            selectedMonth: action.month
        });
    } else if (action.type === CHANGE_YEAR) {
        console.log(action.year)
        return Object.assign({}, state, {
            selectedYear: action.year
        });
    } else if (action.type === SELECT_DATE) {
        return Object.assign({}, state, {
            selectedDate: action.date
        });
    } else if (action.type === SELECT_WEEK) {
        if (action.action === 'decrement') {
            if (state.selectedWeek === 1 && String(state.selectedMonth) === '01') {
                return Object.assign({}, state, {
                    selectedWeek: 5,
                    selectedMonth: String(12),
                    selectedYear: String(Number(state.selectedYear) - 1)
                })
            } else if (state.selectedWeek === 1) {
                if (Number(state.selectedMonth) < 10) {
                    return Object.assign({}, state, {
                        selectedWeek: 5,
                        selectedMonth: String('0' +(Number(state.selectedMonth) - 1))
                    })
                }
                return Object.assign({}, state, {
                    selectedWeek: 5,
                    selectedMonth: String(Number(state.selectedMonth) - 1)
                })
            } else {
                return Object.assign({}, state, {
                    selectedWeek: state.selectedWeek - 1
                })
            }
        } else if (action.action === 'increment') {
            if (state.selectedWeek === 5 && state.selectedMonth === '12') {
                return Object.assign({}, state, {
                    selectedWeek: 1,
                    selectedMonth: '01',
                    selectedYear: String(Number(state.selectedYear) + 1)
                })
            } else if (state.selectedWeek === 5) {
                if (Number(state.selectedMonth) < 10) {
                    return Object.assign({}, state, {
                        selectedWeek: 1,
                        selectedMonth: String('0' +(Number(state.selectedMonth) + 1))
                    })
                }
                return Object.assign({}, state, {
                    selectedWeek: 1,
                    selectedMonth: String(Number(state.selectedMonth) + 1)
                })
            } else {
                return Object.assign({}, state, {
                    selectedWeek: state.selectedWeek + 1
                })
            }
        }
    } else if (action.type === TOGGLE_CALENDAR) {
        return Object.assign({}, state, {
            calendar: action.toggle
        });
    }

    return state;
}
