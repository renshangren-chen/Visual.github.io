// 左
(function () {
    // alert(1)
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".zuotu1  .chart"));

    option = {
        title: {
            text: '',
            link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('三农问题'),
            x: 'center',
            textStyle: {
                fontSize: 23
            }

        },
        xAxis: {
            show: false
        },
        // Y轴配置项
        yAxis: {
            show: false
        },


        // backgroundColor: '#F7F7F7',

        series: [{
            top: "-140px",
            width: "100%",
            height: "100%",
            name: '',
            type: 'wordCloud',
            // size: ['9%', '99%'],
            // sizeRange: [6, 66],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            //shape: 'circle',
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            textStyle: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                name: "Jayfee",
                value: 666
            }, {
                name: "Nancy",
                value: 520
            }]
        }]
    };

    function colorx() {
        console.log(Math.round(Math.random() * 160));
        return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
        ].join(',') + ')';
    }
    var JosnList = [];

    JosnList.push(
        {
            name: "农民",
            value: 500
        },
        {
            name: "农村",
            value: 400
        },
        {
            name: "农业",
            value: 350
        },
        {
            name: "种植",
            value: 200
        },
        {
            name: "收成",
            value: 150
        },
        {
            name: "农作物",
            value: 150
        },
        {
            name: "粮食",
            value: 250
        },
        {
            name: "果蔬",
            value: 200
        },
        {
            name: "养殖",
            value: 200
        },
        {
            name: "牲畜",
            value: 150
        },
        {
            name: "渔业",
            value: 100
        },
        {
            name: "农机具",
            value: 150
        },
        {
            name: "土地",
            value: 300
        },
        {
            name: "农药",
            value: 100
        },
        {
            name: "肥料",
            value: 100
        },
        {
            name: "农民工",
            value: 150
        },
        {
            name: "农村建设",
            value: 200
        },
        {
            name: "扶贫",
            value: 300
        },
        {
            name: "乡村振兴",
            value: 400
        },
        {
            name: "农民合作社",
            value: 150
        },
        {
            name: "农产品加工",
            value: 200
        },
        {
            name: "农业保险",
            value: 100
        },
        {
            name: "农村金融",
            value: 150
        }, {
        name: "土地流转",
        value: 180
    },
        {
            name: "农村改革",
            value: 200
        },
        {
            name: "生态农业",
            value: 250
        },
        {
            name: "农村旅游",
            value: 150
        },
        {
            name: "农业技术",
            value: 150
        },
        {
            name: "农业龙头企业",
            value: 120
        },
        {
            name: "优质农产品",
            value: 150
        },
        {
            name: "合作社",
            value: 120
        },
        {
            name: "土地流转",
            value: 180
        },
        {
            name: "新农村建设",
            value: 200
        },
        {
            name: "现代农业",
            value: 300
        },
        {
            name: "农村金融服务",
            value: 120
        },
        {
            name: "农民工就业",
            value: 150
        },
        {
            name: "农村电商",
            value: 150
        },
        {
            name: "农村养老",
            value: 120
        },
        {
            name: "村级集体经济",
            value: 100
        },
        {
            name: "农产品市场化",
            value: 150
        },
        {
            name: "粮食收储",
            value: 100
        },
        {
            name: "农业保护",
            value: 100
        },
        {
            name: "生猪生产",
            value: 150
        },
        {
            name: "农村公路",
            value: 100
        },
        {
            name: "农产品质量安全",
            value: 150
        },
        {
            name: "水利设施",
            value: 100
        },
        {
            name: "农村环境保护",
            value: 100
        },
        {
            name: "小农户",
            value: 120
        },
        {
            name: "种业",
            value: 120
        },
        {
            name: "新型经营主体",
            value: 120
        },
        {
            name: "畜牧业",
            value: 150
        },
        {
            name: "粮食生产",
            value: 180
        },
        {
            name: "基础设施",
            value: 150
        },
        {
            name: "农业基础设施",
            value: 150
        },
        {
            name: "农产品加工业",
            value: 150
        }, {
        name: "水稻种植",
        value: 100
    },
        {
            name: "农业劳动力",
            value: 120
        },
        {
            name: "土地整治",
            value: 100
        },
        {
            name: "农业保险",
            value: 100
        },
        {
            name: "农村卫生",
            value: 100
        },
        {
            name: "农业税收",
            value: 100
        },
        {
            name: "肉类生产",
            value: 120
        },
        {
            name: "农村电网",
            value: 80
        },
        {
            name: "粮食收购",
            value: 80
        },
        {
            name: "蔬菜种植",
            value: 100
        },
        {
            name: "生态保护补偿",
            value: 80
        },
        {
            name: "畜牧业发展",
            value: 120
        },
        {
            name: "特色农产品",
            value: 100
        },
        {
            name: "农村电力",
            value: 80
        },
        {
            name: "乡村振兴战略",
            value: 120
        },
        {
            name: "种养结合",
            value: 100
        }
    );

    option.series[0].data = JosnList;


    //myChart.setOption(option);
    myChart.on('click', function (params) {
        //alert((params.name));
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));

    });



    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//   右
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".youtu1  .chart"));


    option = {
        // backgroundColor: "#1a4377",
        title: {
            text: '农问题概览',
            textStyle: {
              color: 'white',
              fontSize: "0.25rem",
            },
            top:"110px",
          },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        color: ["#83e0ff", "#45f5ce", "#b158ff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 1000,
              edgeLength: 50,
            },
            roam: true,
            label: {
              normal: {
                show: true,
              },
            },
            data: [
              {
                name: "三农问题",
      
                symbolSize: 120,
                draggable: true,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民",
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 1,
              },
              {
                name: "农村",
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 1,
              },
      
              {
                name: "农村基础设施",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农村建设",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农村发展",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农村贫困",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
      
              {
                name: "农村政策",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农村环境",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "乡村振兴战略",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民收入",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民就业",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民教育",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民医疗",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农民养老",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "社会保障",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农业",
                symbolSize: 100,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "农业政策",
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#b457ff",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#b457ff",
                    color: "#001c43",
                  },
                },
              },
              {
                name: "粮食产量",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 2,
              },
              {
                name: "农业科学",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 2,
              },
              {
                name: "可持续农业",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 2,
              },
              {
                name: "农业机械",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
                category: 2,
              },
              {
                name: "农业经济",
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43",
                  },
                },
              },
            ],
            links: [
              {
                source: "三农问题",
                target: "农民",
              },
              {
                source: "三农问题",
                target: "农村",
              },
              {
                source: "三农问题",
                target: "农业",
              },
              {
                source: "农村",
                target: "农村基础设施",
              },
              {
                source: "农村",
                target: "农村发展",
              },
              {
                source: "农村",
                target: "农村建设",
              },
              {
                source: "农村",
                target: "农村政策",
              },
              {
                source: "农村",
                target: "农村贫困",
              },
              {
                source: "农村",
                target: "农村环境",
              },
              {
                source: "农村",
                target: "乡村振兴战略",
              },
              {
                source: "农民",
                target: "农民收入",
              },
              {
                source: "农民",
                target: "农民就业",
              },
              {
                source: "农民",
                target: "农民教育",
              },
              {
                source: "农民",
                target: "农民医疗",
              },
              {
                source: "农民",
                target: "农民养老",
              },
              {
                source: "农民",
                target: "社会保障",
              },
              {
                source: "三农问题",
                target: "农业",
              },
              {
                source: "农业",
                target: "农业经济",
              },
              {
                source: "农业",
                target: "农业政策",
              },
              {
                source: "农业",
                target: "粮食产量",
                value: "1",
              },
              {
                source: "农业",
                target: "农业科学",
              },
              {
                source: "农业",
                target: "可持续农业",
              },
              {
                source: "农业",
                target: "农业机械",
              },
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0,
              },
            },
            categories: [{ name: "0" }, { name: "1" }, { name: "2" }],
          },
        ],
      };
      

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();