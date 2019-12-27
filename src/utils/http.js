/* eslint-disable */
import request from './request';
import { notification } from 'antd';
import { router } from 'umi';

//  在document.ejs主入口文件中设置地址
const dockUrl = window.dockUrl ? window.dockUrl : '';

request.interceptors.response.use(async response => {
	if (response.status === 401) {
		notification.error({
			message: '登录已失效',
			description: '登录已失效，请重新验证登录信息',
		});
		const dispatch = window.g_app._store.dispatch;
		await dispatch({
			type: 'account/logout',
			payload: { noRequest: true },
		});
		router.push('/account/login');
	}
	return response;
});

const raw = (url, options) => {
	const newOptions = {
		...options,
		headers: { Application: 'es-bench' },
		responseType: 'json',
	};
	return request(url, newOptions).then(data => {
		if (data instanceof Response) {
			if (data.status !== 200) {
				return { errCode: data.status, errMsg: 'invalid response' };
			}
		}
		if (typeof data === 'string') {
			console.warn(data);
			throw 'es error: invalid response, shoud be json object, got string';
		}
		return data;
	});
};

const http = (path, options) => {
	let url = dockUrl + path;
	return raw(url, options);
};

http.post = (path, body) => {
	let options = {};
	options.method = 'POST';
	options.data = body;
	return http(path, options);
};

http.get = path => {
	let options = {};
	options.method = 'GET';
	return http(path, options);
};

http.raw = raw;

export default http;
