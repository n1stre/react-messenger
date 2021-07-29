import { delay, rnd } from "~/utils";
import { IChatMessage } from "../entities/ChatMessage";
import { Instance } from "./MessengerApi.interface";

let msgId = 1;
const msgDate = new Date();
function createChatroomMessageMock() {
  msgDate.setDate(msgDate.getDate() - 1);

  const author = {
    name: rnd.randomAuthorName(),
    avatarUrl: rnd.randomImageUrl(),
  };

  return {
    id: (msgId++).toString(),
    author,
    date: msgDate.toString(),
    text: rnd.randomText(),
  };
}

const chatroomsMock = [
  {
    id: "1",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 13,
    messages: [createChatroomMessageMock()],
  },
  {
    id: "2",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 7,
    messages: [createChatroomMessageMock()],
  },
  {
    id: "3",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 28,
    messages: [createChatroomMessageMock()],
  },
  {
    id: "4",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 0,
    messages: [createChatroomMessageMock()],
  },
  {
    id: "5",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 30,
    messages: [createChatroomMessageMock()],
  },
  {
    id: "6",
    thumbnail: rnd.randomImageUrl(),
    totalMessages: 100,
    messages: [createChatroomMessageMock()],
  },
];

type MessageHandler = (dto: IChatMessage.DTO) => void;
export default class MessengerApiMock implements Instance {
  private subscriptions: Record<string, MessageHandler> = {};

  static create() {
    return new MessengerApiMock();
  }

  async listChatrooms() {
    await delay();
    return chatroomsMock;
  }

  async getChatroomById(id: string) {
    await delay();
    return chatroomsMock.find((v) => v.id === id) || null;
  }

  async getChatroomMessages(params: {
    roomId: string;
    offset: number;
    limit: number;
  }) {
    await delay();
    return Array.from({ length: params.limit }, () => {
      return createChatroomMessageMock();
    });
  }

  async sendMessage(roomId: string, text: string) {
    const dto: IChatMessage.DTO = { ...createChatroomMessageMock(), text };
    const handler = this.subscriptions[roomId];
    await delay();
    handler(dto);
  }

  subscribe(roomId: string, onMessage: MessageHandler) {
    this.subscriptions[roomId] = onMessage;
    return () => this.unsubscribe(roomId);
  }

  unsubscribe(roomId: string) {
    delete this.subscriptions[roomId]; // noop
  }
}
