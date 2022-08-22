import { NEW_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
}

function clientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_CLIENT:
    return {
      ...state,
      clients: [...state.clients, ...action.state]
    }
    default: return state
  }
}

export default clientReducer;