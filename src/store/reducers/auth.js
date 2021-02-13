import {AUTH_SUCCESS,AUTH_LOGOUT} from '../actions/actionTypes'

const innitialState = {
	token: null
}
export default function authReducer (state = innitialState, action) {
	switch(action.type) {
		case AUTH_SUCCESS:
		return {
			...state,
			token: action.token
		}
		case AUTH_LOGOUT:
		return {
			...state,
			token: null
		}
		default:
		return state
	}
} 

