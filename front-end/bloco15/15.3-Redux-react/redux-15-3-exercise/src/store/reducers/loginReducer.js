import { LOGIN_ACTION } from "../actions";

const INITIAL_STATE = {
  login: {
    email: '',
    password: '',
  }
}

function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      login: { ...action.state }
    }
    default: return state
  }
}

export default LoginReducer;