(function () {
    var myChart = echarts.init(document.querySelector(".singlebar .chart1"));
    // 把配置给实例对象



    option = {
        title: {
            text: '三农领域相关政策及标准',
            left: 'center',
            textStyle: {
                color: 'white',
                fontStyle: 'italic',
                fontSize: 36,
                textBorderColor: 'yellow',
                textBorderWidth: 0.8
            }
        },
        xAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value'
        },
        yAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value'
        },
        // backgroundColor: '#2a333d',
        legend: {
            left: 'right',
            top: 'bottom',
            orient: 'vertical',
            selectedMode: 'single',
            textStyle: {
                color: 'write',
                fontSize: 18
            },
            data: [{
                name: '政策规划'
            }, {
                name: '相关标准'
            }, {
                name: '法律法规'
            },]
        },
        tooltip: {
            enterable: true,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
        },
        series: [
            {
                name: "政策规划",
                type: "graph",
                draggable: false,
                coordinateSystem: "cartesian2d",
                itemStyle: {
                    color: "#99cc99",
                },
                label: {
                    show: true,
                    position: "right",
                    fontSize: 15,
                },
                data: [
                    {
                        name: "2023年",
                        value: [250, 850],
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                        symbolSize: 100,
                    },
                    {
                        name: "《中共中央 国务院关于做好2023年全面推进乡村振兴重点工作的意见》",
                        value: [650, 850],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,

                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:130px;width:460px;border-radius:5px;background:#fff">' +
                                    "印发时间：" +
                                    "2022年2月22日" +
                                    "<br>政策内容：民族要复兴，乡村必振兴，要坚持把解决好“三农”问题作为<br>全党工作重中之重。" +
                                    "文件提出推动乡村振兴取得新进展，农业农村现代化。<br>迈出新步伐" +
                                    "牢牢守住保障国家粮食安全和不发生规模性返贫两条底线，<br>突出年度性" +
                                    "任务、针对性举措、实效性导向，充分发挥农村基层党组织<br>领导作用，" +
                                    "扎实有序做好乡村发展、乡村建设、乡村治理重点工作。"
                                "</div>";
                                return tipHtml;
                            },
                        },
                    },
                    {
                        name: "2022年",
                        value: [250, 650],
                        symbolSize: 80,
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                    },
                    {
                        name: "《中共中央　国务院关于做好2022年全面推进乡村振兴重点工作的意见》",
                        value: [650, 700],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,
                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:90px;width:410px;border-radius:5px;background:#fff">' +
                                    "印发时间：" +
                                    "2021年2月21日" +
                                    "<br>政策内容：" +
                                    "文件指出，把全面推进乡村振兴作为实现中华民族<br>伟大复兴的" +
                                    "一项重大任务，举全党全社会之力加快农业农村<br>现代化，让广" +
                                    "大农民过上更加美好的生活。<br>";
                                ("</div>");
                                return tipHtml;
                            },
                        },
                    },
                    {
                        name: "2021年",
                        value: [250, 500],
                        symbolSize: 60,
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                    },
                    {
                        name: "《中共中央 国务院关于全面推进乡村振兴加快农业农村现代化的意见》",
                        value: [650, 550],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,
                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:90px;width:380px;border-radius:5px;background:#fff">' +
                                    "发布日期：" +
                                    "2021年2月21日" +
                                    "<br>文件内容：把全面推进乡村振兴作为实现中华民族伟大复兴<br>的一项重大任务，" +
                                    "举全党全社会之力加快农业农村现代化，<br>让广大农民过上更加美好的生活"
                                "</div>";
                                return tipHtml;
                            },
                        },
                    },
                    {
                        name: "2020年",
                        value: [250, 350],
                        symbolSize: 40,
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                    },
                    {
                        name: "《关于扩大农业农村有效投资 加快补上“三农”领域突出短板的意见》",
                        value: [650, 400],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,
                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:90px;width:430px;border-radius:5px;background:#fff">' +
                                    "发布日期：" +
                                    "2020年7月" +
                                    "<br>发布单位：中央农办、农业农村部、国家发展改革委、财政部等部门" +
                                    "<br>文件内容:农业是国之根本，力求在最短" +
                                    "时间内,补上\"三农\"领域突出的<br>短板,完成我国农业农村发展的目标."

                                "</div>";
                                return tipHtml;
                            },
                        },
                    },
                    {
                        name: "2019年",
                        value: [250, 200],
                        symbolSize: 30,
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                    },
                    {
                        name: "《中共中央　国务院关于坚持农业农村优先发展做好“三农”工作的若干意见》",
                        value: [650, 230],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,
                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:85px;width:345px;border-radius:5px;background:#fff">' +
                                    "发布日期：" +
                                    "2019年1月3日" +
                                    "<br>文件内容:发挥\"三农\"压舱石作用,为有效应对各种" +
                                    "<br>风险挑战赢得主动,为确保经济持续健康发展和社会大局" +
                                    "<br>稳定,如期实" +
                                    "现第一个百年奋斗目标奠定基础."
                                "</div>";
                                return tipHtml;
                            },
                        },
                    },

                    {
                        name: "2016年",
                        value: [250, 50],
                        symbolSize: 30,
                        label: {
                            position: "left",
                            offset: [-30, 0],
                        },
                    },
                    {
                        name: "《关于加大改革创新力度加快农业现代化建设的若干意见》",
                        value: [650, 50],
                        symbolSize: 15,
                        tooltip: {
                            show: true,
                            padding: 0,
                            formatter: function (params) {
                                var tipHtml = "";
                                tipHtml =
                                    '<div style="height:110px;width:350px;border-radius:5px;background:#fff">' +
                                    "发布日期：" +
                                    "2016年1月28日" +
                                    "<br>发布单位：中华人民共和国国务院" +
                                    "<br>意见内容：建立重要农产品供给保障机制，努力夯实现" +
                                    "<br>代农业物质基础；健全农业支持保护制度，不断加大强农" +
                                    "<br>惠农富农政策力度；" +
                                    "</div>";
                                return tipHtml;
                            },
                        },
                    },
                ],
            },
            {
                name: "政策规划",
                type: "effectScatter",
                coordinateSystem: "cartesian2d",
                silent: true,
                rippleEffect: {
                    brushType: "stroke",
                    scale: 1.7,
                },
                itemStyle: {
                    color: "#99cc99",
                },
                data: [
                    {
                        value: [250, 850],
                        symbolSize: 100,
                    },
                    {
                        value: [250, 650],
                        symbolSize: 80,
                    },
                    {
                        value: [250, 500],
                        symbolSize: 60,
                    },
                    {
                        value: [250, 350],
                        symbolSize: 40,
                    },
                    {
                        value: [250, 200],
                        symbolSize: 30,
                    },
                    {
                        value: [250, 50],
                        symbolSize: 30,
                    },
                ],
            },
            {
                name: "政策规划",
                type: "lines",
                coordinateSystem: "cartesian2d",
                zlevel: 2,
                effect: {
                    show: true,
                    symbolSize: 10,
                    symbol: "triangle",
                },
                tooltip: {
                    show: false,
                },
                lineStyle: {
                    curveness: 0.1,
                    opacity: 0.2,
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "#58B3CC",
                            },
                            {
                                offset: 1,
                                color: "#F58158",
                            },
                        ],
                        false
                    ),
                    width: 2,
                },
                data: [
                    {
                        coords: [
                            [250, 850],
                            [250, 650],
                        ],
                        lineStyle: { curveness: 0 },
                    },
                    {
                        coords: [
                            [250, 650],
                            [250, 500],
                        ],
                        lineStyle: { curveness: 0 },
                    },
                    {
                        coords: [
                            [250, 500],
                            [250, 350],
                        ],
                        lineStyle: { curveness: 0 },
                    },
                    {
                        coords: [
                            [250, 350],
                            [250, 200],
                        ],
                        lineStyle: { curveness: 0 },
                    },
                    {
                        coords: [
                            [250, 200],
                            [250, 50],
                        ],
                        lineStyle: { curveness: 0 },
                    },
                    {
                        coords: [
                            [250, 850],
                            [650, 850],
                        ],
                    },
                    {
                        coords: [
                            [250, 650],
                            [650, 700],
                        ],
                    },
                    {
                        coords: [
                            [250, 500],
                            [650, 550],
                        ],
                    },
                    {
                        coords: [
                            [250, 350],
                            [650, 400],
                        ],
                    },
                    {
                        coords: [
                            [250, 200],
                            [650, 230],
                        ],
                    },
                    {
                        coords: [
                            [250, 50],
                            [650, 50],
                        ],
                    },
                ],
            },
        ],
        animationDuration: 5000,
        animationDelay: 500
    }




    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



// 图2
(function () {
    var myChart = echarts.init(document.querySelector(".singlebar .chart2"));

    option = {

        tooltip: {
          trigger: "axis",
          formatter: function (params, ticket, callback) {
            var res = params[0].name;
      
            for (var i = 0, l = params.length; i < l; i++) {
              if (params[i].seriesType === "line") {
                res +=
                  "<br/>" +
                  params[i].seriesName +
                  " : " +
                  (params[i].value ? params[i].value : "-") +
                  "h";
              } else {
                res +=
                  "<br/>" +
                  params[i].seriesName +
                  " : " +
                  (params[i].value ? params[i].value : "-") +
                  "个";
              }
            }
            return res;
          },
        },
        grid: {
            // top:'30px',
            top: '10%',
          containLabel: true,
        },
        legend: {
            top: '30px',
          data: ["居民恩格尔系数(%)", "城镇居民恩格尔系数(%)", "农村居民恩格尔系数(%)"],
          textStyle: {
            color: 'white' // 设置指标颜色为红色
          }
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: [
                2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008
            ],
            
          },
        ],
        dataZoom: [
          {
            type: "slider",
            xAxisIndex: 0,
            filterMode: "empty",
            start: 0,
            end: 100,
          },
          {
            type: "slider",
            yAxisIndex: 0,
            filterMode: "empty",
            start: 0,
            end: 100,
          },
          {
            type: "inside",
            xAxisIndex: 0,
            filterMode: "empty",
            start: 0,
            end: 100,
          },
          {
            type: "inside",
            yAxisIndex: 0,
            filterMode: "empty",
            start: 0,
            end: 100,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "百分百",
            min: 0,
            position: "left",
            axisLabel: {
              formatter: "{value} %",
            },
          },
          {
            type: "value",
            name: "个数",
            min: 0,
            position: "right",
            axisLabel: {
              formatter: "{value} 个",
            },
          },
        ],
        series: [
          {
            name: "居民恩格尔系数(%)",
            type: "line",
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: "rgba(0,0,0,0.4)",
                shadowBlur: 10,
                shadowOffsetY: 10,
              },
            },
            data: [30.5, 29.8, 30.2, 28.2, 28.4, 29.3, 30.1, 30.6, 31, 31.2, 33, 33.6, 33.4, 34.3, 36.3],
          },
          {
            name: "城镇居民恩格尔系数(%)",
            type: "bar",
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            data: [29.5, 28.6, 29.2, 27.6, 27.7, 28.6, 29.3, 29.7, 30, 30.1, 32, 32.3, 31.9, 32.9, 34.5],
          },
          {
            name: "农村居民恩格尔系数(%)",
            type: "bar",
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: "top",
              },
            },
            data: [33, 32.7, 32.7, 30, 30.1, 31.2, 32.2, 33, 33.6, 34.1, 35.9, 37.1, 37.9, 38, 40.9],
          },
        ],
      };
      


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



//图3
(function () {
    var myChart = echarts.init(document.querySelector(".singlebar .chart3"));

    

    option = {
        grid: {
            // top:'30px',
            top: '15%',
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
            top:'20px',
          data: ["农村普通高中招生数(万人)", "农村受教育普及率"],
          textStyle: {
            color: 'white' // 设置指标颜色为红色
          },
          fontSize:"30px"
        },
        xAxis: [
          {
            type: "category",
            data: [
                2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008
            ],
            textStyle: {
                color: 'white' // 设置指标颜色为红色
              }
          },

        ],
        yAxis: [
          {
            type: "value",
            name: "万人",
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "百分百",
            // min: 0,
            // max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "农村普通高中招生数(万人)",
            type: "bar",
            data: [
                847.5, 774.9538, 776.4435, 739.4949, 592.7063, 600.1, 502.9, 596.6, 596.6, 622.7, 644.6, 450.8, 636.2, 530.3, 637
            ],
          },
          {
            name: "农村受教育普及率",
            type: "line",
            yAxisIndex: 1,
            data: [67.0, 60.2, 54.3, 54.5, 56.3, 47.2, 42.3, 30.4, 32.0, 31.5,20.0, 26.2, 25.5,26.0, 24.2],
          },
        ],
      };
      



    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//图4
(function () {
    var myChart = echarts.init(document.querySelector(".singlebar .chart4"));

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
            data: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008],
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
                name: "农村网络接入用户(万户)",
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

                data: [15770.48, 14189.65, 13477.33, 11741.67, 9377.3, 7454.03, 6398.37, 4873.71, 4737.27, 4075.9, 3308.8, 2475.7, 2075.9, 1308.8, 975.7],
            },
        ],
    };




    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();