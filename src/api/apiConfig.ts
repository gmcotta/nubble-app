import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.sIqHA9uWMDm2Gr-pFgEhQlD4R9JLpGFfyG5neEZZLMgF3KDIqDAKiUqqk9c6'
  }
});
