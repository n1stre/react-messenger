import { useMemo } from "react";
import { useQuery } from "react-query";
import QUERY_KEYS from "~/constants/queryKeys";
import api from "../api";

export default function useChatRooms() {
  const chatRooms = useQuery(QUERY_KEYS.CHATROOMS_LIST, () =>
    api.listChatrooms(),
  );

  const result = useMemo(() => {
    const data = chatRooms.data;
    const actions = {};
    return { data, actions };
  }, [chatRooms.data]);

  return result;
}
