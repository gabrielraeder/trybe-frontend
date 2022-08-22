import { NEW_CLIENT } from "../actions";
import { REMOVE_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
}

function clientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_CLIENT:
    return {
      ...state,
      clients: [...state.clients, action.state]
    }

  case REMOVE_CLIENT:
    const clientRemoved = state.clients
      .filter((client) => client.name !== action.state.name && client.email !== action.state.email)
    return {
      ...state,
      clients: clientRemoved,
    }
  default: return state
  }
}

export default clientReducer;