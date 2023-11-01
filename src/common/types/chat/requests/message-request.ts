import { ContentType } from '../content-type';

export type MessageRequest = {
  chatId: string;
  content: ContentType;
};
