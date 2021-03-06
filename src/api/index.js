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
  },
  getStockListData:()=>{
    return axios.get("/stockList");
  },
  getOneStockInfo:(id)=>{
    return  axios.get(`/stockList?searchVal=${id}`);
  },
  getReportBarCharts(){
    return axios.get('/saleReport')
  },
  getIncrementBarCharts(){
    return axios.get('/incrementReport')
  },
  getPurchaseOrderData(){
    return axios.get('/purchaseOrderList')
  },
  getOnePurchaseOrderInfo(proName){
    return  axios.get(`/purchaseOrderList?searchOrder=${proName}`);
  },
  getOrderDetailData(orderId){
    return  axios.get(`/orderDetail?orderId=${orderId}`);
  },
  getSaleProductList(type){
    return  axios.get(`/saleProduct?goodType=${type}`);
  }
};
