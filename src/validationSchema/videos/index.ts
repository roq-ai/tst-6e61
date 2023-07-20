import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  tags: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
