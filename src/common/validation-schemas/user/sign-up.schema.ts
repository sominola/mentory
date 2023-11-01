import type { SignUpDto } from '@/common/types/types';
import { object, ObjectSchema, ref, string } from 'yup';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const signUpSchema: ObjectSchema<SignUpDto> = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().required('Email is required').email('Wrong email').matches(emailRegex, 'Wrong email'),

  password: string().required('Password is required').min(6, 'Min length is 6'),

  passwordConfirm: string()
    .required('Password is required')
    .min(6, 'Min length is 6')
    .oneOf([ref('password')], 'Passwords must be same'),
});
