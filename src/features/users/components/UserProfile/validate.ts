import { object, reach, string } from 'yup';

const schema = object({
  name: string().trim().max(64).required(),
  'user-name': string()
    .trim()
    .max(32)
    .matches(/^[a-z._]+$/i)
    .required(),
  email: string().trim().email().required(),
  street: string().trim().max(64).required(),
  city: string().trim().max(64).required(),
  'zip-code': string()
    .trim()
    .matches(/^\d{5}(?:-\d{4})?$/)
    .required(),
  phone: string()
    .trim()
    .max(32)
    .matches(/^[\dx\-(). ]+$/)
    .required(),
  website: string().trim().max(64).required(),
  comment: string().trim(),
});

export const isFormValid = (data: any) => schema.isValidSync(data);

export const isFieldValid = (field: string, data: string) =>
  reach(schema, field).isValidSync(data);
