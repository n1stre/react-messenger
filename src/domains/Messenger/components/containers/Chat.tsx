import React from "react";
import useChatRoom from "~/domains/Messenger/hooks/useChatRoom";
import ChatMessage from "../../entities/ChatMessage";
import ChatRoom from "../../entities/ChatRoom";

import styles from "./Chat.module.scss";

const Chat: React.FC<{ id: string }> = (props) => {
  const [message, setMessage] = React.useState("");
  const [scrollPos, setScrollPos] = React.useState("bottom");
  const scrollRef = React.useRef(null);
  const scrollElem = scrollRef.current || ({} as HTMLElement);
  const inputRef = React.useRef(null);
  const inputElem = inputRef.current || ({} as HTMLElement);

  const chat = useChatRoom({
    roomId: props.id,
    onMessage: () => {
      if (scrollPos == "bottom") {
        const docElem = document.getElementById("chatMessages");
        const elem = docElem || ({} as HTMLElement);
        scrollToBottom(elem);
      }
    },
  });

  const handleMessageInputChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessage(evt.target.value);
    inputElem.style.height = "auto";
    inputElem.style.height = inputElem.scrollHeight + "px";
  };

  const handleScroll = () => {
    if (isScrolledToBottom(scrollElem)) setScrollPos("bottom");
    else if (isScrolledToTop(scrollElem)) setScrollPos("top");
    else setScrollPos("middle");
  };

  const handleMessageSend = () => {
    chat.actions.sendMessage(message);
    setMessage("");
  };

  const room = ChatRoom.create(chat.data);
  const messages = room.getMessages();

  React.useEffect(() => {
    if (messages.length) scrollToBottom(scrollElem);
  }, [Boolean(messages.length)]);

  return (
    <div className={styles.wrapper}>
      <ul
        id="chatMessages"
        className={styles.messages}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {messages.map((dto) => {
          const msg = ChatMessage.create(dto);

          return (
            <li className={styles.message} key={dto.id}>
              <img
                src={msg.getAuthorAvatarUrl()}
                alt={msg.getAuthorName()}
                className={styles.avatar}
              />

              <div className={styles.messageInner}>
                <p className={styles.messageAuthor}>
                  <span className={styles.id}>#{dto.id}</span>
                  <span>{msg.getAuthorName()}</span>
                </p>
                <p className={styles.messageText}>{msg.getText()}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.textarea}
          placeholder="Enter message here"
          value={message}
          onChange={handleMessageInputChange}
        ></textarea>
        <button className={styles.btnSend} onClick={handleMessageSend}>
          Send!
        </button>
      </div>
    </div>
  );
};

export default Chat;

function isScrolledToBottom(elem: HTMLElement) {
  const { scrollTop, scrollHeight, clientHeight } = elem;
  return scrollTop + clientHeight === scrollHeight;
}

function isScrolledToTop(elem: HTMLElement) {
  const { scrollTop } = elem;
  return scrollTop === 0;
}

function scrollToBottom(elem: HTMLElement) {
  setTimeout(() => {
    elem.scrollTop = elem.scrollHeight;
  }, 0);
}
