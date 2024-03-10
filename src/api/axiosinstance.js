import axios from 'axios';
import notification from 'antd/es/notification';

const apiRoot =
  'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/';
export const api = () => {
  const axiosInstance = axios.create({
    baseURL: apiRoot,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.request.status === 0) {
        notification.error({
          message: 'Ошибка',
          description: 'Ошибка сети',
          placement: 'topRight',
          className: 'notification',
        });
      }
      notification.error({
        message: error.response.statusText,
        description: error.response.data.message,
        placement: 'topRight',
        className: 'notification',
      });
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
