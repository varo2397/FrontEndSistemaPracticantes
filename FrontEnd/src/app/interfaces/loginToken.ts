import { Token } from './token';

export interface LoginToken {
  token: Token;
  person_id: number;
  person_type: string;
}
