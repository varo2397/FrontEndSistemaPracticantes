import { Activity } from './activity';

export interface Event {
  name: string;
  eventDate: Date;
  start: string;
  finish: string;
  id: number;
  image: string;
  type_id: number;
  activities: Activity[];
}
