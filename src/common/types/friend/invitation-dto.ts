import { UserDto } from '@/common/types/types';

export type InvitationDto = {
  id: number;
  fromUser: UserDto;
  toUser: UserDto;
  isAccepted: boolean | null;
};
