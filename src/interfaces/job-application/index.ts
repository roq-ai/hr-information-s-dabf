import { JobOpeningInterface } from 'interfaces/job-opening';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  job_opening_id?: string;
  guest_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  job_opening?: JobOpeningInterface;
  user?: UserInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_opening_id?: string;
  guest_id?: string;
  status?: string;
}
