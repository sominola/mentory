import type { UserUpdateDto } from '@/common/types/types';
import { object, ObjectSchema, string } from 'yup';

export const userUpdateSchema: ObjectSchema<UserUpdateDto> = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  avatarUrl: string().nullable(),
});
