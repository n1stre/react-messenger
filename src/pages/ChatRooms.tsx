import React from "react";
import { ChatList, MessengerLayout } from "~/domains/Messenger/components";

const { Header, Main } = MessengerLayout;

const ChatRoomsPage: React.FC = () => {
  return (
    <MessengerLayout>
      <Header>Available chats</Header>
      <Main>
        <ChatList />
      </Main>
    </MessengerLayout>
  );
};

export default ChatRoomsPage;
