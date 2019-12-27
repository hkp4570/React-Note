/* eslint-disable */
import http from '@/utils/http';
// const appkey='Mr_Han_1559224919423';
const appkey = 'demo13_1545210570249';
const url = 'http://api.duyiedu.com/';
export default {
  async getStudent({ page, size }) {
    return http.get('/api/student/findByPage?appkey=' + appkey + '&page=' + page + '&size=' + size);
  }
}
