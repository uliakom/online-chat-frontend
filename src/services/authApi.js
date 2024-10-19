import axios from 'axios';

const instance = axios.create({
  baseURL: 'online-chat-backend-seven.vercel.app',
  // baseURL: 'http://localhost:3001',
  timeout: 10000,
});
export default instance;

export function unsetToken() {
  instance.defaults.headers.common.Authorization = '';
}


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

export const logout = async () => {
  try {
    const data = await instance.get('/logout');
    unsetToken();
    localStorage.removeItem('refreshToken');
    return data;
  } catch (error) {
    console.error('An error occurred during logout:', error);
    throw error;
  }
};