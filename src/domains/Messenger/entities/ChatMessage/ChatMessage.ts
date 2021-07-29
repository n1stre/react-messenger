import { datefns } from "~/utils";
import { DTO, Entity } from "./ChatMessage.interface";

export default class ChatMessage implements Entity {
  private constructor(private dto: DTO) {}

  static create(dto: DTO) {
    return new ChatMessage(dto);
  }

  getAuthorName() {
    return this.dto.author.name;
  }

  getAuthorAvatarUrl() {
    return this.dto.author.avatarUrl;
  }

  getText() {
    return this.dto.text;
  }

  getRelativeDate() {
    return datefns.formatRelative(this.dto.date, {
      today: "'Today at' HH:mm a",
      yesterday: "'Yesterday at' HH:mm a",
      other: "MMMM d, yyyy 'at' HH:mm a",
    });
  }
}
