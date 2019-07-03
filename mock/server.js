let http = require("http"),
    fs = require("fs"),
    url = require("url");


// 1、获取lefVal.json的数据
function readLeftVal(cb) {//用来读取数据的
    //fs.readFile为异步的，所以在调用时需要传递回调函数，当读取数据后，在执行callback
    fs.readFile('./mock/json/leftNav.json', 'utf8', function (err, data) {
        if (err || !data) {
            console.log(err, data)
            cb(data);//如果有错误 或者文件没长度，就是空数组
        } else {
            cb(JSON.parse(data));//将读出来的内容转化成对象
        }
    })
}
//获取库存中的数据列表
function readStockList(cb) {
    fs.readFile('./mock/json/stockData.json', 'utf8', function (err, data) {
        if (err || !data) {
            cb(data);
        } else {
            cb(JSON.parse(data))
        }
    })
}

function readSalesReport(cb){
    fs.readFile('./mock/json/salesStatistics.json', 'utf8', function (err, data) {
        if (err || !data) {
            console.log(err, data)
            cb(data);//如果有错误 或者文件没长度，就是空数组
        } else {
            cb(JSON.parse(data));//将读出来的内容转化成对象
        }
    })
}

function readIncrementReport(cb){
    fs.readFile('./mock/json/incrementStatistics.json', 'utf8', function (err, data) {
        if (err || !data) {
            console.log(err, data)
            cb(data);//如果有错误 或者文件没长度，就是空数组
        } else {
            cb(JSON.parse(data));//将读出来的内容转化成对象
        }
    })
}

function readPurchaseOrder(cb){
    fs.readFile('./mock/json/purchaseOrder.json', 'utf8', function (err, data) {
        if (err || !data) {
            console.log(err, data)
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

    let  {pathname,query} = url.parse(req.url,true);// 解析路径

    //左侧导航
    if (pathname === '/leftData') {
        readLeftVal(function (navs) {
            // let hot = navs.reverse().slice(0, 6);//将获取的数据倒序，并截取前6个
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(navs))
        })
        return;
    }
    //库存
    if (pathname === '/stockList') {
        // let val = query.searchVal;//取出的id是字符串
        if( query.searchVal){
            let val = query.searchVal;
            console.log(val)
            readStockList(function (datas) {
                // var ary = JSON.stringify(datas)
               let ary = datas.result.resultList.filter(item=>{
                    return item.name === val || item.supplier === val;
                })
                datas.result.resultList = ary;
                if(!ary) datas.result.resultList = [];
                res.setHeader('Content-Type', 'application/json;charset=utf8');
                res.end(JSON.stringify(datas));
            })
        }else{//获取所有库存
            readStockList(function (datas) {
                res.setHeader('Content-Type', 'application/json;charset=utf8');
                res.end(JSON.stringify(datas));
            })
        }
        return;
    }

    //报表
    if(pathname === "/saleReport"){
        readSalesReport(function (datas) {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(datas))
        })
        return;
    }
    if(pathname === "/incrementReport"){
        readIncrementReport(function (datas) {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(datas))
        })
        return;
    }
    if(pathname === "/purchaseOrderList"){
        readPurchaseOrder(function(datas){
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(datas))
        })
        return;
    }

}).listen(3000)
