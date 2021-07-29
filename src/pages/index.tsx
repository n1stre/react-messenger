import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "../constants/routes";
import ChatRoomsPage from "./ChatRooms";
import ChatRoomPage from "./ChatRoom";

const Pages: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.ROOT}>
          <Redirect to={routes.CHAT_ROOMS} />
        </Route>
        <Route exact path={routes.CHAT_ROOMS}>
          <ChatRoomsPage />
        </Route>
        <Route exact path={routes.CHAT_ROOM()}>
          <ChatRoomPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
