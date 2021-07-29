import { IChatRoom } from "../entities/ChatRoom";
import { IChatMessage } from "../entities/ChatMessage";

export interface Instance {
  listChatrooms: () => Promise<IChatRoom.DTO[]>;

  getChatroomById: (id: string) => Promise<IChatRoom.DTO | null>;

  getChatroomMessages: (params: {
    roomId: string;
    offset: number;
    limit: number;
  }) => Promise<IChatMessage.DTO[]>;

  subscribe: (
    roomId: string,
    onMessage: (dto: IChatMessage.DTO) => void,
  ) => () => void;

  unsubscribe: (roomId: string) => void;

  sendMessage: (roomId: string, text: string) => Promise<void>;
}
