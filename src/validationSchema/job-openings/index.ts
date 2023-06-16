import * as yup from 'yup';

export const jobOpeningValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  requirements: yup.string().required(),
  company_id: yup.string().nullable(),
});
