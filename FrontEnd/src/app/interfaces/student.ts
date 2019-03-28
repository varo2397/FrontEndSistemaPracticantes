export interface Student {
  id?: number;
  person_id?: number;
  career_id: number;
  site_id: number;
  status?: number;
  created_at: string;
  updated_at?: string;
  semester_id: number;
  image?: File;
}
