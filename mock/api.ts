import mockjs from 'mockjs';

export default {
  'GET /api/studentAll': mockjs.mock({
    'datas|100': [
      {
        'id|+1': 0,
        name: '@cname',
        birthday: '@date',
        'sex|1-2': true,
      },
    ],
  }),
};
