import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from '../actions/actionTypes'

const innitialState = {
	quiz: []
}
export default function createReducer(state = innitialState, action) {
	switch(action.type) {
		case CREATE_QUIZ_QUESTION:
		return {
			...state,
			quiz: [...state.quiz, action.item]
		}
		case RESET_QUIZ_CREATION:
		return {
			...state,
			quiz: []
		}

		default:
		return state
	}
}