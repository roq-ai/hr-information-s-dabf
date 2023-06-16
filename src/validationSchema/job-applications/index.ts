import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  job_opening_id: yup.string().nullable(),
  guest_id: yup.string().nullable(),
});
