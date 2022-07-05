import { object, reach, string } from 'yup';

const schema = object({
  name: string().trim().max(64).required(),
  username: string()
    .trim()
    .max(32)
    .matches(/^[a-z._]+$/i)
    .required(),
  email: string().trim().email().required(),
  street: string().trim().max(64).required(),
  city: string().trim().max(64).required(),
  zipcode: string()
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

export const isFormValid = (shape: object) => schema.isValidSync(shape);

export const isFieldValid = (name: string, value: string) =>
  reach(schema, name).isValidSync(value);
