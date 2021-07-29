import React from "react";
import { useHistory } from "react-router-dom";
import useChatRooms from "~/domains/Messenger/hooks/useChatRooms";
import routes from "~/constants/routes";
import ChatRoom from "../../entities/ChatRoom";
import ChatMessage from "../../entities/ChatMessage";
import styles from "./ChatList.module.scss";

const ChatList: React.FC = () => {
  const history = useHistory();
  const { data } = useChatRooms();

  return (
    <ul className={styles.list}>
      {data?.map((dto) => {
        const chat = ChatRoom.create(dto);
        const previewMsg = ChatMessage.create(chat.getLastMessage());

        return (
          <li
            className={styles.chat}
            key={dto.id}
            onClick={() => history.push(routes.CHAT_ROOM(dto.id))}
          >
            <img
              className={styles.chatThumb}
              src={chat.getThumbnail()}
              alt=""
            />
            <div className={styles.chatPreview}>
              <p className={styles.chatPreviewAuthor}>
                {previewMsg.getAuthorName()}
              </p>
              <p className={styles.chatPreviewText}>{previewMsg.getText()}</p>
              <span className={styles.chatPreviewDate}>
                {previewMsg.getRelativeDate()}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatList;
