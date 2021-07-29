const routes = {
  ROOT: "/",
  CHAT_ROOMS: "/chats",
  CHAT_ROOM: (id = ":id") => `/chats/${id}`,
};

export default routes;
