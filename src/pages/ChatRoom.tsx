import React from "react";
import { Link, useParams } from "react-router-dom";
import { Chat, MessengerLayout } from "~/domains/Messenger/components";
import routes from "../constants/routes";

const { Header, Main } = MessengerLayout;

const ChatRoomPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <MessengerLayout>
      <Header leftSlot={<Link to={routes.CHAT_ROOMS}>Back</Link>}>
        Chatroom # {id}
      </Header>
      <Main>
        <Chat id={id} />
      </Main>
    </MessengerLayout>
  );
};

export default ChatRoomPage;
