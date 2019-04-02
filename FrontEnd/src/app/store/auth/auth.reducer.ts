
import { SET_LOGIN_TOKEN, RESET_TOKEN, AuthActions } from './auth.actions';
import {LoginToken} from '../../interfaces/loginToken';

export interface State extends LoginToken {
  isAuthenticated: boolean;
}

const initialState: State = <State>{
    person_id: 0,
    person_type: '',
    token: {
    token_type: '',
      expires_in: 0,
      access_token: '',
      refresh_token: ''
  },
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_LOGIN_TOKEN:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case RESET_TOKEN:
      return initialState;
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getToken = (state: State) => state.token;
export const getPersonID = (state: State) => state.person_id;
