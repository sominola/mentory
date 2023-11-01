import { UserStatusType } from '@/common/enums/enums';
import { UserDto } from './user.dto';

export type UserCacheDto = UserDto & {
  status: UserStatusType;
  lastOnlineAt: Date;
};
