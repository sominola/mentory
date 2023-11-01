import { ContentType } from '../types';

export type MessageDto = {
  id: string;
  content: ContentType;
  chatId: string;
  createdAt: Date;
  senderId: number;
};
