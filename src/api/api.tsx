import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const register = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
        if (axios.isAxiosError(error)) {
          throw error.response ? error.response.data : error.message;
        } else {
          throw new Error('An unexpected error occurred');
        }
      }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error.response ? error.response.data : error.message;
        } else {
          throw new Error('An unexpected error occurred');
        }
      }
};

export const update = async (userId: string, updatedData: {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  profileImage?: string;
  preferences?: string[];
}) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update/${userId}`, updatedData);
    return response.data;
  } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error.response ? error.response.data : error.message;
        } else {
          throw new Error('An unexpected error occurred');
        }
      }
};
