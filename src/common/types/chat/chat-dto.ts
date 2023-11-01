import { ChatType } from '@/common/enums/enums';
import { MessageDto } from './message-dto';

export type ChatDto = {
  id: string;
  type: ChatType;
  lastMessage: MessageDto | null;
  name: string;
  avatar: string | null;
  memberIds: number[];
  createdAt: Date;
};
