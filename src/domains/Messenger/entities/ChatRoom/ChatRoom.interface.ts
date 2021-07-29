import { IChatMessage } from "../ChatMessage";

export interface DTO {
  id: string;
  thumbnail: string;
  totalMessages: number;
  messages: IChatMessage.DTO[];
}

export interface Entity {
  getThumbnail: () => string;
  getTotalMessages: () => number;
  getLastMessage: () => IChatMessage.DTO;
  getMessages: () => IChatMessage.DTO[];
}
