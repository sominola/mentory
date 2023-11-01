import type { SignInDto } from '@/common/types/types';
import { object, ObjectSchema, string } from 'yup';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const signInSchema: ObjectSchema<SignInDto> = object({
  email: string().required('Email is required').email('Wrong email').matches(emailRegex, 'Wrong email'),
  password: string().required('Password is required').min(6, 'Min length is 6'),
});
