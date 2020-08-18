import mock from '../mock/user';

let postApi = (path) => {
  return mock[path];
};

export const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(postApi('/api/user'))
    },2000)
  })
}

