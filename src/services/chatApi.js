import instance from "./authApi";

export const createChat = (data) => instance.post('/chat/', data);

export const userChats = (id) => instance.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => instance.get(`/chat/find/${firstId}/${secondId}`);