export interface User {
  id?: number;
  password: string;
  email: string;
  person_id: number;
  scope_id?: number;
  remember_token?: string;
  created_at?: string;
  updated_at?: string;
}
