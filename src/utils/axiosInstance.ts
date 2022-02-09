import axios from 'axios';

// Creates a base instance for all axios based request
const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use((config) => {
  //TODO: Add api key if required

  return config;
});

export default axiosInstance;
