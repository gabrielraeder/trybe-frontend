export const LOGIN_ACTION = 'LOGIN';
export const NEW_CLIENT = 'NEW_CLIENT';

export const loginAction = (state) => ({ type: LOGIN_ACTION, state })

export const newClientAction = (state) => ({ type: NEW_CLIENT, state })