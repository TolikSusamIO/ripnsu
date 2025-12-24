import axios from "axios";

// Получаем API URL из переменных окружения
// В production (Docker) используется /api (проксируется nginx на backend)
// В development используется http://localhost:8000 напрямую
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Создаем настроенный instance axios
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Можно добавить interceptors для обработки ошибок
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
