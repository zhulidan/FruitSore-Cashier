let http = require("http"),
    fs = require("fs"),
    url = require("url");


// 1、获取lefVal.json的数据
function readLeftVal(cb) {//用来读取数据的
    //fs.readFile为异步的，所以在调用时需要传递回调函数，当读取数据后，在执行callback
    fs.readFile('./mock/json/leftNav.json', 'utf8', function (err, data) {
        if (err || !data) {
          console.log(err,data)
            cb(data);//如果有错误 或者文件没长度，就是空数组
        } else {
            cb(JSON.parse(data));//将读出来的内容转化成对象
        }
    })
}
http.createServer((req, res) => {//创建一个服务
    //由于服务器端为localhost:3000，前端的端口为localhost:8080，需在前端请求服务器端的代码，属于跨域，node.js 跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader("X-Powered-By", ' 3.2.1');
    if (req.method == 'OPTIONS') {
        return res.end(); /*让options请求快速返回*/
    }

    let { pathname, query } = url.parse(req.url);// 解析路径
    if (pathname === '/leftData') {
      readLeftVal(function (navs) {
            // let hot = navs.reverse().slice(0, 6);//将获取的数据倒序，并截取前6个
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(navs))
        })
        return;
    }

}).listen(3000)
