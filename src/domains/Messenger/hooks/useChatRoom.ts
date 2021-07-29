import { useMemo, useState, useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import QUERY_KEYS from "~/constants/queryKeys";
import { IChatMessage } from "../entities/ChatMessage";
import { IChatRoom } from "../entities/ChatRoom";
import api from "../api";

export default function useChatRoom(params: {
  roomId: string;
  onMessage: (dto: IChatMessage.DTO) => void;
}) {
  const { roomId, onMessage } = params;
  const [messages, setMessages] = useState<IChatMessage.DTO[]>([]);

  const chatRoom = useQuery([QUERY_KEYS.CHATROOM, roomId], () =>
    api.getChatroomById(roomId),
  );

  const listMessages = useCallback(async () => {
    const offset = messages.length;
    const data = await api.getChatroomMessages({ roomId, limit: 10, offset });
    setMessages((prev) => [...data, ...prev]);
  }, [roomId, messages.length]);

  const sendMessage = useCallback(async (text: string) => {
    await api.sendMessage(roomId, text);
  }, []);

  const handleNewMessage = useCallback(
    (dto: IChatMessage.DTO) => {
      setMessages((prev) => [...prev, dto]);
      setTimeout(() => onMessage(dto), 0);
    },
    [onMessage],
  );

  useEffect(() => {
    listMessages();
  }, []);

  useEffect(() => {
    return api.subscribe(roomId, handleNewMessage);
  }, [roomId, handleNewMessage]);

  const result = useMemo(() => {
    const data = { ...chatRoom.data, messages } as IChatRoom.DTO;
    const actions = { listMessages, sendMessage };
    return { data, actions };
  }, [chatRoom.data, messages, listMessages, sendMessage]);

  return result;
}
