export default{
    //柱形图
    barChart: function (options, color,that) {
        var dom = document.getElementById(options.dom);
        var myChart = that.Echars.init(dom);
        var option = {
            title: {
                text: options.title,
                x: 'left',
                textStyle: {
                    color: color,
                    fontSize: 14,
                    fontWeight: '700'
                }
            },
            grid: {
                left: options.left,
                right: options.right,
                top: options.top,
                bottom: options.bottom,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: [options.bg],
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false//是否显示网格线
                },
                axisLine: {
                    lineStyle: {
                        color:"#d9d9d9"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color:"#d9d9d9"
                    },
                    // show: false
                },
                axisLabel: {
                    textStyle: {
                        color: color
                    },
                },
                data: options.xData
            },
            yAxis: {
                type: 'value',
                min: 1,

                splitLine: {
                    show: true,
                    lineStyle:{
                        type:'dashed',
                        color:"#e8e8e8"
                    }
                },
                splitNumber: 2,
                axisLine: {
                    lineStyle: {
                        color: color
                    },
                    show: false//是否显示坐标轴线
                },
                axisTick: {
                    lineStyle: {
                        color: color
                    },
                    show: false//是否显示刻度线
                },
                axisLabel: {
                    textStyle: {
                        color: color
                    }
                },
            },
            series: [{
                data: options.yData,
                type: 'bar'
            }]
        };

        var dom = document.getElementById(options.dom);
        dom.removeAttribute("_echarts_instance_");
        myChart.clear();

        myChart.setOption(option, true);
        return myChart
    },
}