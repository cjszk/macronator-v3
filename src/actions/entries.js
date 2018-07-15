import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { getUserInfo } from './auth';

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