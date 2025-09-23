import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer Mw.j8qze1ztmXtczWqpA6HZUYVynMc_HeHJJ_OjrwEj_qBNVGbNwHGCc9TtAm0z'
  }
});
