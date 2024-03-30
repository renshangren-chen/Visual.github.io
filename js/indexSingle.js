(function (){
    var myChart = echarts.init(document.querySelector(".singlebar .chart1"));
    // 把配置给实例对象
    option = {
        backgroundColor: "rgba(3,29,51,0.45)",
        legend: {
            top: "20",
            x: "center",
            textStyle: {
                fontSize: 16,
                color: "rgba(101, 213, 255, 1)",
            },
            icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            itemWidth: 8, // 设置宽度
            itemHeight: 8, // 设置高度、
            itemGap: 12, // 设置间距
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 1)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: 16,
                align: "left",
            },
        },
        grid: {
            top: "20%",
            width:"80%",
            bottom: "5%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: true,
            data: ["河北", "山西", "浙江", "江苏", "河南"],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 16,
                },
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)",
                },
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)",
                },
            },
        },
        yAxis: [
            {
                type: "value",
                splitNumber: 3,
                axisLabel: {
                    textStyle: {
                        color: "#65D5FF",
                        fontStyle: "normal",
                        fontSize: 16,
                    },
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(77, 128, 254, 0.2)",
                    },
                },
            },
        ],
        series: [
            {
                name: "移动互联网普及指数省份",
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(0, 151, 251, 1)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.2)", // 100% 处的颜色
                                },
                            ],
                            globalCoord: false, // 缺省为 false
                        }, //渐变颜色
                    },
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [147.1, 108.6, 104.2, 100.0, 97.7],
            },
        ],
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



// 图2
(function (){
    var myChart = echarts.init(document.querySelector(".singlebar .chart2"));

    option = {
        backgroundColor: "rgba(3,29,51,0.45)",
        legend: {
            top: "20",
            x: "center",
            textStyle: {
                fontSize: 16,
                color: "rgba(101, 213, 255, 1)",
            },
            icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            itemWidth: 8, // 设置宽度
            itemHeight: 8, // 设置高度、
            itemGap: 12, // 设置间距
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 1)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: 16,
                align: "left",
            },
        },
        grid: {
            top: "20%",
            width:"80%",
            bottom: "5%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: true,
            data: ["江苏", "浙江", "河北", "福建", "安徽"],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 16,
                },
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)",
                },
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)",
                },
            },
        },
        yAxis: [
            {
                type: "value",
                splitNumber: 3,
                axisLabel: {
                    textStyle: {
                        color: "#65D5FF",
                        fontStyle: "normal",
                        fontSize: 16,
                    },
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(77, 128, 254, 0.2)",
                    },
                },
            },
        ],
        series: [
            {
                name: "乡村宽带网络普及指数及省份",
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(0, 151, 251, 1)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.2)", // 100% 处的颜色
                                },
                            ],
                            globalCoord: false, // 缺省为 false
                        }, //渐变颜色
                    },
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [96.3, 95.7, 98.8, 93.6, 91.3],
            },
        ],
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



//图3
(function (){
    var myChart = echarts.init(document.querySelector(".singlebar .chart3"));

    var salvProName = [
        "安徽省",
        "河南省",
        "浙江省",
        "湖北省",
        "贵州省",
        "江西省",
        "江苏省",
        "四川省",
        "云南省",
        "湖南省",
    ];
    var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
    var salvProMax = []; //背景按最大值
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0]);
    }
    option = {
        backgroundColor: "#003366",
        grid: {
            left: "2%",
            right: "2%",
            bottom: "2%",
            top: "2%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none",
            },
            formatter: function (params) {
                return params[0].name + " : " + params[0].value;
            },
        },
        xAxis: {
            show: false,
            type: "value",
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                    },
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                data: salvProName,
            },
            {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                    textStyle: {
                        color: "#ffffff",
                        fontSize: "12",
                    },
                },
                data: salvProValue,
            },
        ],
        series: [
            {
                name: "值",
                type: "bar",
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: "rgb(57,89,255,1)",
                            },
                            {
                                offset: 1,
                                color: "rgb(46,200,207,1)",
                            },
                        ]),
                    },
                },
                barWidth: 20,
                data: salvProValue,
            },
            {
                name: "背景",
                type: "bar",
                barWidth: 20,
                barGap: "-100%",
                data: salvProMax,
                itemStyle: {
                    normal: {
                        color: "rgba(24,31,68,1)",
                        barBorderRadius: 30,
                    },
                },
            },
        ],
    };




    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//图4
(function (){
    var myChart = echarts.init(document.querySelector(".singlebar .chart4"));

    var salvProName = [
        "安徽省",
        "河南省",
        "浙江省",
        "湖北省",
        "贵州省",
        "江西省",
        "江苏省",
        "四川省",
        "云南省",
        "湖南省",
    ];
    var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
    var salvProMax = []; //背景按最大值
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0]);
    }
    option = {
        backgroundColor: "#003366",
        grid: {
            left: "2%",
            right: "2%",
            bottom: "2%",
            top: "2%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none",
            },
            formatter: function (params) {
                return params[0].name + " : " + params[0].value;
            },
        },
        xAxis: {
            show: false,
            type: "value",
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                    },
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                data: salvProName,
            },
            {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                    textStyle: {
                        color: "#ffffff",
                        fontSize: "12",
                    },
                },
                data: salvProValue,
            },
        ],
        series: [
            {
                name: "值",
                type: "bar",
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: "rgb(57,89,255,1)",
                            },
                            {
                                offset: 1,
                                color: "rgb(46,200,207,1)",
                            },
                        ]),
                    },
                },
                barWidth: 20,
                data: salvProValue,
            },
            {
                name: "背景",
                type: "bar",
                barWidth: 20,
                barGap: "-100%",
                data: salvProMax,
                itemStyle: {
                    normal: {
                        color: "rgba(24,31,68,1)",
                        barBorderRadius: 30,
                    },
                },
            },
        ],
    };



    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();