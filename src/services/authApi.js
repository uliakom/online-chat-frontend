import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://online-chat-backend-kzsu.onrender.com',
  baseURL: 'https://online-chat-backend-seven.vercel.app/',
  // baseURL: 'http://localhost:3001',
  timeout: 10000,
});
export default instance;


export const register = async credentials => {
  try {
    const { data } = await instance.post('/register', credentials);
    return data;
  } catch (error) {
    console.error('An error occurred during registration:', error);
    throw error;
  }
};

export const verifyMail = async credentials => {
  try {
    const { data } = await instance.post('/verify', credentials);
    return data;
  } catch (error) {
    console.error('An error occurred during verification:', error);
    throw error;
  }
};

export const logIn = async credentials => {
  try {
    const { data } = await instance.post('/login', credentials);
    return data;
  } catch (error) {
    console.error('An error occurred during login:', error);
    throw error;
  }
};