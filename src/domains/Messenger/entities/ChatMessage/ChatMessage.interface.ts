export interface AuthorDTO {
  name: string;
  avatarUrl: string;
}

export interface DTO {
  id: string;
  author: AuthorDTO;
  date: string | number;
  text: string;
}

export interface Entity {
  getAuthorName: () => string;
  getAuthorAvatarUrl: () => string;
  getRelativeDate: () => string;
  getText: () => string;
}
