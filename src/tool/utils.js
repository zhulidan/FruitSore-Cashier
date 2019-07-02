export default{
    //柱形图
    barChart: function (options, color,that) {
        console.log(that)
        var dom = document.getElementById(options.dom);
        var myChart = that.Echars.init(dom);
        var option = {
            title: {
                text: options.title,
                x: 'center',
                textStyle: {
                    color: color,
                    fontSize: 12,
                    fontWeight: '500'
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

            },
            color: [options.bg],
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false//是否显示网格线
                },
                axisLine: {
                    lineStyle: {
                        color: color
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: color
                    },
                    show: false
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
                    show: false
                },
                splitNumber: 2,
                axisLine: {
                    lineStyle: {
                        color: color
                    },
                },
                axisTick: {
                    lineStyle: {
                        color: color
                    }
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