import axios from 'axios'
// 终极方案
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });
  //拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log('请求成功');
    //用途,请求是添加加载loading,检查token
    return config;
  }, err => {
    // console.log('请求失败');
  });
  //相应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data;
  },err=>{
    // console.log(err);
  })
  //发送请求
  return instance(config)
}