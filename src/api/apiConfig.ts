import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer MQ.LZkdhm0gYo2X-6HXT86vCmfAbK2rspxeUEmRWYlKl23jCdJ2t65Ux-_kabCU'
  }
});
