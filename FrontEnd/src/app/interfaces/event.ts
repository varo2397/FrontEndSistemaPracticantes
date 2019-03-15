import { Activity } from './activity';

export interface Event {
  name: string;
  eventDate: string;
  start: string;
  finish: string;
  id: number;
  image: File;
  type_id: number;
  activities: Activity[];
}
