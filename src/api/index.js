import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';//设置默认的基本路径
//设置响应的拦截器
axios.interceptors.response.use(function (res) {
  return res.data;// 在这里统一拦截结果，把结果处理成res.data
});

//获取轮播图数据，返回的是一个promise对象
export default {
  getLeftNavData: () => {
    return axios.get('/leftData');
  }

};
