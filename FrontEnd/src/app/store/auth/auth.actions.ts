import { Action } from '@ngrx/store';
import { LoginToken } from '../../interfaces/loginToken';

export const SET_LOGIN_TOKEN = '[Auth] Set Token';
export const RESET_TOKEN = '[Auth] Reset Token';

export class SetLoginToken implements Action {
  readonly type = SET_LOGIN_TOKEN;
  constructor(public payload: LoginToken) {}
}

export class ResetToken implements Action {
  readonly type = RESET_TOKEN;
}

export type AuthActions = SetLoginToken | ResetToken;
