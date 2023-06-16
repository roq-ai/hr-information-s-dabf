import { JobApplicationInterface } from 'interfaces/job-application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOpeningInterface {
  id?: string;
  company_id?: string;
  title: string;
  description: string;
  requirements: string;
  created_at?: any;
  updated_at?: any;
  job_application?: JobApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    job_application?: number;
  };
}

export interface JobOpeningGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  title?: string;
  description?: string;
  requirements?: string;
}
