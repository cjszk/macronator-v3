import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { getUserInfo } from './auth';

export const REFRESH_ENTRY_FORM = 'REFRESH_ENTRY_FORM';
export const refreshEntryForm = () => ({
    type: REFRESH_ENTRY_FORM
    
})
export const STOP_REFRESH_ENTRY_FORM = 'STOP_REFRESH_ENTRY_FORM';
export const stopRefreshEntryForm = () => ({
    type: STOP_REFRESH_ENTRY_FORM
    
})

export const submitData = (authToken, newData) => dispatch => {
    return fetch(`${API_BASE_URL}/data`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
        dispatch(getUserInfo(authToken, newData.userId))
    })
    .catch(err => console.error(err))
}

export const deleteData = (authToken, id, userId) => dispatch => {
    return fetch(`${API_BASE_URL}/data/${id}`, {
        method: 'DELETE',
        header: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then((res) => normalizeResponseErrors(res))
    .then(res => {
        dispatch(getUserInfo(authToken, userId))
    })
    .catch(err => console.error(err))
}