import { request } from 'umi';

export default {
  async student() {
    return request('/api/sutdentAll', { method: 'GET' });
  },
};
