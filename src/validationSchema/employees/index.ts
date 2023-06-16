import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  salary: yup.number().integer().required(),
  hire_date: yup.date().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
