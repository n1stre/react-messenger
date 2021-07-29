import { DTO, Entity } from "./ChatRoom.interface";

export default class ChatRoom implements Entity {
  private constructor(private dto: DTO) {}

  static create(dto: DTO) {
    return new ChatRoom(dto);
  }

  getThumbnail() {
    return this.dto.thumbnail;
  }

  getTotalMessages() {
    return this.dto.totalMessages;
  }

  getLastMessage() {
    return this.dto.messages[0];
  }

  getMessages() {
    return this.dto.messages || [];
  }

  hasMoreMessages() {
    return this.getMessages().length < this.getTotalMessages();
  }
}
