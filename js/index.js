// 标记点：左1
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart1"));
  // 指定配置和数据
  option = {
    title: {
      text: '历年粮食总量',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      top: 70,
      bottom: 40
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true
        }
      }
    },
    legend: {
      data: ["增长率", "全国年度粮食产量"],
      // top: "15%",
      top: 8,
      right: 10,
      textStyle: {
        color: "#ffffff"
      }
    },
    "dataZoom": [{
      "show": true,
      "height": 15,
      "xAxisIndex": [
        0
      ],
      bottom: 5,
      "start": 10,
      "end": 80,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: {
        color: "#d3dee5",

      },
      textStyle: {
        color: "#fff"
      },
      borderColor: "#90979c"


    }, {
      "type": "inside",
      "show": true,
      "height": 15,
      "start": 1,
      "end": 35
    }],
    xAxis: {
      data: [1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      //data: this.mydata.data.name,
      axisLine: {
        // show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#c0c3cd"
        }
      },
      axisTick: {
        show: true //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          // color: "#c0c3cd" //X轴文字颜色
        }
      }
    },
    yAxis: [
      {
        type: "value",
        name: "产量(亿吨)",
        nameTextStyle: {
          // color: "#ebf8ac"
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#c0c3cd"
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            // color: "#ebf8ac"
          }
        }
      },
      {
        type: "value",
        name: "增长率",
        nameTextStyle: {
          color: "#c0c3cd"
        },
        position: "right",
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          formatter: "{value}%", //右侧Y轴文字显示
          textStyle: {
            color: "#c0c3cd"
          }
        }
      },
      {
        type: "value",
        gridIndex: 0,
        min: 50,
        max: 100,
        splitNumber: 8,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
          }
        }
      }
    ],
    series: [
      {
        name: "增长率",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: false, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 5, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          normal: {
            color: "#FEBE36",
            borderWidth: 0,
            shadowColor: "rgba(72,216,191, 0.3)",
            shadowBlur: 20,
            borderColor: "rgba(255,255,255,0.5)"
          }
          // color: "#FEBE36",
          // borderWidth: 3,
          // borderColor: "rgba(255,255,255,0.5)"
        },
        lineStyle: {
          color: "rgba(255,255,255,0.5)"
        },
        areaStyle: {
          color: "rgba(5,140,255, 0.2)"
        },
        data: [
          0, 16.74, 8.73, 14.04, 1.77, 1.61, 8.49, 4.78, 1.19, 1.34, -14.14, -15.25, -5.10, 13.11, 7.32, 9.14, 7.53, 10.02, 1.78, -4.01, 0.91, 13.73, 4.25, -3.86, 10.17, 3.89,
          2.84, 0.63, -1.25, 7.80, 8.95, -5.49, 1.39, 8.99, 9.24, 5.15, -7.85, 3.28, 3.38, -2.63, 3.42, 9.48, -2.45, 1.69, 2.94, -2.52, 4.84, 7.98, -2.07, 4.35, -0.77, -9.15,
          3.65, 7.48, -5.75, 9.02, 3.11, 2.89, 1.22, 6.00, 0.94, 3.66, 5.24, 4.03, 2.98, 1.47, 3.29, -0.03, 0.18, -0.56, 0.90, 0.85, 1.99, 0.54
        ]

      },
      {
        name: "全国年度粮食产量",
        type: "line",
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00FFE3"
              },
              {
                offset: 1,
                color: "#4693EC"
              }
            ])
          }
        },
        data: [
          1.13184, 1.32129, 1.43689, 1.63931, 1.66841, 1.69528, 1.83946, 1.92756, 1.95045, 1.97663, 1.69692, 1.43857, 1.36509, 1.54414, 1.65741, 1.80887, 1.94525, 2.14009, 2.17823, 2.09060, 2.10973, 2.39955, 2.50140, 2.40480, 2.64935, 2.75270,
          2.84515, 2.86305, 2.82725, 3.04765, 3.32115, 3.20555, 3.25020, 3.54500, 3.87275, 4.07305, 3.79108, 3.91512, 4.04731, 3.94081, 4.07549, 4.46243, 4.35293, 4.42658, 4.56488, 4.45101, 4.66618, 5.04535, 4.94171, 5.12295, 5.08386, 4.62175,
          4.52637, 4.57058, 4.30695, 4.69470, 4.84022, 4.98042, 5.04139, 5.34343, 5.39409, 5.59113, 5.88493, 6.12226, 6.30482, 6.39648, 6.60603, 6.60435, 6.61607, 6.57892, 6.63843, 6.69492, 6.82848, 6.8653
        ]
      }
    ]
  };

  myChart.getZr().on('click', function (param) {
    // 获取 点击的 触发点像素坐标
    const pointInPixel = [param.offsetX, param.offsetY]
    // 判断给定的点是否在指定的坐标系或者系列上
    if (myChart.containPixel('grid', pointInPixel)) {
      // 获取到点击的 x轴 下标  转换为逻辑坐标
      let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0]
      // 做一些其他事情
      console.log(xIndex)
      if (xIndex == 10 || xIndex == 11 || xIndex == 12) {
        window.location.href = './new1959/index.html';
        // alert("1959-1961连续三年跳转");
      }

      if (xIndex == 36) {
        window.location.href = './new1985/index.html';
        // alert("1985跳转");
      }

      if (xIndex == 51) {
        window.location.href = './new2000/index.html';
        // alert("2000跳转");
      }




    }
  })
  // 将可以响应点击事件的范围内，鼠标样式设为pointer--------------------
  myChart.getZr().on('mousemove', function (params) {
    var pointInPixel = [params.offsetX, params.offsetY]
    if (myChart.containPixel('grid', pointInPixel)) {
      // 将此区域的 鼠标样式变为 小手
      myChart.getZr().setCursorStyle('pointer')
    }
  })
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();



// 标记点：左2 图1
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {

    // backgroundColor: "#323a5e",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "2%",
      right: "4%",
      bottom: "14%",
      top: "16%",
      containLabel: true,
    },
    legend: {
      data: ["农产品", "种植业", "畜牧业", "海水养殖"],
      right: 10,
      top: 12,
      textStyle: {
        color: "#fff",
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    xAxis: {
      type: "category",
      data: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008],
      axisLine: {
        lineStyle: {
          color: "white",
        },
      },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: "Microsoft YaHei",
        },
      },
    },

    yAxis: {
      type: "value",
      // max: "1200",
      axisLine: {
        show: false,
        lineStyle: {
          color: "white",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
        },
      },
      axisLabel: {},
    },
    dataZoom: [
      {
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: "8%",
        start: 10,
        end: 90,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#d3dee5",
        },
        textStyle: {
          color: "#fff",
        },
        borderColor: "#90979c",
      },
      {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: "农产品",
        type: "line",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#fccb05",
              },
              {
                offset: 1,
                color: "#f5804d",
              },
            ]),
            barBorderRadius: 12,
          },
        },
        data: [100.4, 97.8, 115, 114.5, 99.1, 96.5, 103.4, 101.7, 99.8, 103.2, 102.7, 116.5, 110.9, 97.6, 114.1
        ],
      },
      {
        name: "种植业",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#8bd46e",
              },
              {
                offset: 1,
                color: "#09bcb7",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [110.6, 102.8, 100.8, 101.2, 99.5, 97, 99.2, 101.8, 104.3, 104.8, 107.8, 116.6, 102.9, 108.4, 109.8],
      },
      {
        name: "畜牧业",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [82.1, 132.4, 133.5, 95.6, 90.8, 110.4, 104.2, 97.1, 102.4, 99.7, 126.2, 103, 90.1, 123.9, 131.4],
      },
      {
        name: "海水养殖",
        type: "bar",
        barWidth: "15%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: [105.6, 96.3, 97.2, 101.4, 107.9, 104.1, 101, 101.9, 100.7, 101, 111.5, 107.6, 99, 111.2, 108.1],
      },
    ],
  };

  var app = {
    currentIndex: -1,
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

})();

// 标记点：左2 图2

(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .dongtu"));
  var years = ["2022", "2021", "2020"];
  var jdData = [
    [
      "黑龙江", "内蒙古", "河南", "吉林", "新疆", "山东", "河北", "安徽", "云南", "四川"
    ],
    [
      // "黑龙江", "内蒙古", "河南", "山东", "吉林", "四川", "河北", "云南", "安徽", "甘肃"
      "黑龙江", "内蒙古", "河南", "吉林", "新疆", "山东", "河北", "安徽", "云南", "四川"
    ],
    [
      // "黑龙江", "内蒙古", "河南", "山东", "吉林", "四川", "甘肃", "河北", "甘肃", "云南",
      "黑龙江", "内蒙古", "河南", "吉林", "新疆", "山东", "河北", "安徽", "云南", "四川"
    ],
  ];
  var data = [
    [
      17195.40, 11496.50, 7514.10, 7498.50, 7038.60, 6461.90, 6034.20, 5546.90, 5395.50, 5227.20
    ],
    [
      15845.70,
      9270.80,
      8112.30,
      6986.70,
      5239.60,
      7589.80,
      6518.90,
      5866.80,
      6213.30,
      6725.20,

    ],
    [
      15850.10,
      9257.90,
      8111.00,
      7993.40,
      5216.50,
      6606.90,
      6520.50,
      7867.50,
      5207.80,
      6732.90,


    ],
  ];



  option = {
    baseOption: {
      // backgroundColor: "#2c343c", //背景颜色
      timeline: {
        data: years,
        axisType: "category",
        autoPlay: true,
        playInterval: 2000, //播放速度

        left: "5%",
        right: "5%",
        bottom: "0%",
        width: "90%",
        //  height: null,
        label: {
          normal: {
            textStyle: {
              color: "red",
            },
          },
          emphasis: {
            textStyle: {
              color: "red",
            },
          },
        },
        symbolSize: 10,
        lineStyle: {
          color: "#red",
        },
        checkpointStyle: {
          borderColor: "#red",
          borderWidth: 2,
        },
        controlStyle: {
          showNextBtn: true,
          showPrevBtn: true,
          normal: {
            color: "#ff8800",
            borderColor: "#ff8800",
          },
          emphasis: {
            color: "red",
            borderColor: "red",
          },
        },
      },
      title: {
        text: "",
        right: "2%",
        bottom: "8%",
        textStyle: {
          fontSize: 50,
          color: "white", //标题字体颜色
        },
      },
      tooltip: {
        trigger: "axis",
      },
      calculable: true,
      grid: {
        left: "8%",
        right: "2%",
        bottom: "18%",
        top: "0%",
        containLabel: true,
      },
      label: {
        normal: {
          textStyle: {
            color: "red",
          },
        },
      },
      yAxis: [
        {
          nameGap: 50,
          offset: "37",
          type: "category",
          interval: 50,
          //inverse: ture,//图表倒叙或者正序排版
          data: "",
          nameTextStyle: {
            color: "red",
          },

          axisLabel: {
            //rotate:45,
            show: false,
            textStyle: {
              fontSize: 2,

              color: function (params, Index) {
                // 标签国家字体颜色

                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                var colorarrays = [
                  "#6bc0fb",
                  "#7fec9d",
                  "#fedd8b",
                  "#ffa597",
                  "#84e4dd",
                  "#749f83",
                  "#ca8622",
                  "#bda29a",
                  "#a8d8ea",
                  "#aa96da",
                  "#fcbad3",
                  "#ffffd2",
                  "#f38181",
                  "#fce38a",
                  "#eaffd0",
                  "#95e1d3",
                  "#e3fdfd",
                  "#749f83",
                  "#ca8622",
                ];

                //console.log("111", Index, colorarrays[Index],params); //打印序列

                return colorarrays[jdData[0].indexOf(params)];
              },
            }, //rotate:45,
            interval: 50,
          },
          axisLine: {
            lineStyle: {
              color: "balck", //Y轴颜色
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "balck",
            },
          },
        },
      ],
      xAxis: [
        {
          type: "value",
          name: "单位(万公顷)",

          splitNumber: 8, //轴线个数
          nameTextStyle: {
            color: "balck",
          },
          axisLine: {
            lineStyle: {
              color: "white", //X轴颜色
            },
          },
          axisLabel: {
            formatter: "{value} ",
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fedd8b",
            },
          },
        },
      ],
      series: [
        {
          name: "单位(万公顷)",
          type: "bar",
          markLine: {
            label: {
              normal: {
                show: false,
              },
            },
            lineStyle: {
              normal: {
                color: "red",
                width: 3,
              },
            },
          },
          label: {
            normal: {
              show: true,
              position: "right", //数值显示在右侧
              formatter: "{c}(万公顷)",
            },
          },
          itemStyle: {
            normal: {
              color: function (params) {
                // build a color map as your need.
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                var colorList = [
                  "#6bc0fb",
                  "#7fec9d",
                  "#fedd8b",
                  "#ffa597",
                  "#84e4dd",
                  "#749f83",
                  "#ca8622",
                  "#bda29a",
                  "#a8d8ea",
                  "#aa96da",

                ];
                // return colorList[params.dataIndex]

                // console.log("111", params.name); //打印序列
                return colorList[jdData[0].indexOf(params.name)];
              },
            },
          },
        },

        {
          name: "",
          type: "bar",
          markLine: {
            label: {
              normal: {
                show: false,
              },
            },
            lineStyle: {
              normal: {
                color: "red",
                width: 3,
              },
            },
          },
          barWidth: "50%",
          barGap: "-100%",
          label: {
            normal: {
              show: true,
              fontSize: 12, //标签国家字体大小
              color: "white",

              position: "left", //数值显示在右侧
              formatter: function (p) {
                return p.name;
              },
            },
          },
          itemStyle: {
            normal: {
              color: function (params) {
                // build a color map as your need.
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                var colorList = [
                  "#6bc0fb",
                  "#7fec9d",
                  "#fedd8b",
                  "#ffa597",
                  "#84e4dd",
                  "#749f83",
                  "#ca8622",
                  "#bda29a",
                  "#a8d8ea",
                  "#aa96da",

                ];
                // return colorList[params.dataIndex]

                // console.log("111", params.name); //打印序列
                return colorList[jdData[0].indexOf(params.name)];
              },
            },
          },
        },
      ],

      animationEasingUpdate: "quinticInOut",
      animationDurationUpdate: 1500, //动画效果
    },

    options: [],
  };
  for (var n = 0; n < years.length; n++) {
    var res = [];
    //alert(jdData.length);
    for (j = 0; j < data[n].length; j++) {
      res.push({
        name: jdData[n][j],
        value: data[n][j],
      });
    }

    res
      .sort(function (a, b) {
        return b.value - a.value;
      })
      .slice(0, 6);

    res.sort(function (a, b) {
      return a.value - b.value;
    });

    var res1 = [];
    var res2 = [];
    //console.log(res);
    for (t = 0; t < res.length; t++) {
      res1[t] = res[t].name;
      res2[t] = res[t].value;
    }
    option.options.push({
      title: {
        text: years[n] + "年",
      },
      yAxis: {
        data: res1,
      },
      series: [
        {
          data: res2,
        },
        {
          data: res2,
        },
      ],
    });
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 标记点：左2 图3
(function () {
  var myChart = echarts.init(document.querySelector(".line .xiaofei"));

  option = {
    //   backgroundColor: "#031A32",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
        },
      },
    },
    grid: {
      left: "10%",
      top: "18%",
      right: "5%",
      bottom: "22%",
    },
    legend: {
      data: ["农村居民消费水平(元)", "城镇居民消费水平(元)", "居民消费水平(元)"],
      top: "4%",
      textStyle: {
        color: "#1FC3CE",
        fontSize: 12,
      },
    },
    xAxis: {
      data: [
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
      ],
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#3d5269",
          width: 1,
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
        alignWithLabel: true,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#396A87", //X轴文字颜色
          fontSize: 11,
        },
        interval: 0,
        rotate: 30,
      },
    },
    yAxis: [
      {
        type: "value",
        name: "",
        nameTextStyle: {
          color: "#396A87",
          fontSize: 8,
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: "#3d5269",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#396A87",
            fontSize: 10,
          },
        },
      },
      {
        type: "value",
        name: "",
        nameTextStyle: {
          color: "#396A87",
          fontSize: 10,
        },
        position: "right",
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#396A87",
            width: 2,
          },
        },
        axisLabel: {
          show: false,
          formatter: "{value} %", //右侧Y轴文字显示
          textStyle: {
            color: "#396A87",
            fontSize: 10,
          },
        },
      },
    ],
    series: [

      {
        name: "农村居民消费水平(元)",
        type: "bar",
        barWidth: 9,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00FFFF",
              },
              {
                offset: 1,
                color: "#0080FF",
              },
            ]),
          },
        },
        data: [
          18434, 16046, 15382, 13985, 12145, 10609, 9409, 8365, 7397, 6573, 5880, 4782, 4295, 3981, 3538
        ],
      },
      {
        name: "城镇居民消费水平(元)",
        type: "bar",
        barWidth: 9,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#E29052",
              },
              {
                offset: 1,
                color: "#FA5A53",
              },
            ]),
          },
        },
        data: [
          37995, 34043, 34900, 32483, 30323, 28154, 26119, 24430, 22620, 20869, 19218, 16570, 14687, 13722, 12217

        ],
      },
      {
        name: "居民消费水平(元)",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 6, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: "#26D9FF",
          borderColor: "#26D9FF",
          width: 2,
          shadowColor: "#26D9FF",
          shadowBlur: 2,
        },
        lineStyle: {
          color: "#26D9FF",
          width: 2,
          shadowBlur: 2,
        },
        data: [
          31013, 27439, 27504, 25245, 22968, 20801, 18857, 17220, 15586, 14074, 12668, 10575, 9249, 8504, 7454

        ],
      },
    ],
  };




  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//左3 图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chartx"));

  // var xData = (function () {
  //   var data = [];
  //   for (var i = 1; i < 13; i++) {
  //     data.push(i + "月份");
  //   }
  //   return data;
  // })();
  var xData = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
  ];

  option = {
    // top:"500px",
    // backgroundColor: "#344b58",
    title: {
      text: "近15年农村医疗设施情况",
      top: "8px",
      // subtext: "BY Wang Dingding",
      // x: "4%",


      textStyle: {
        color: "#fff",
        fontSize: "22",
      },
      subtextStyle: {
        color: "#90979c",
        fontSize: "16",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: 70,
      bottom: 55,
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      // x: "4%",
      top: 40,
      textStyle: {
        color: "#90979c",
      },
      data: ["政府成立", "私人成立", "村卫生室个数"],
    },

    calculable: true,
    xAxis: [
      {
        type: "category",

        axisLine: {
          lineStyle: {
            color: "#90979c",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: xData,
      },
    ],
    yAxis: [
      {
        name: "单位（万所）",
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#90979c",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        splitArea: {
          show: false,
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        height: 20,
        xAxisIndex: [0],
        bottom: 10,
        start: 10,
        end: 80,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#d3dee5",
        },
        textStyle: {
          color: "#fff",
        },
        borderColor: "#90979c",
      },
      {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: "政府成立",
        type: "bar",
        stack: "总量",
        barMaxWidth: 35,
        barGap: "10%",
        itemStyle: {
          normal: {
            color: "rgba(255,144,128,1)",
            label: {
              show: true,
              textStyle: {
                color: "#fff",
              },
              position: "inside",
              formatter: function (p) {
                return p.value > 0 ? p.value : "";
              },
            },
          },
        },
        data: [
          53.81, 46.79, 33.95, 34.21, 37.90, 30.10, 31.32, 26.94, 24.16, 25.01, 21.27, 23.52, 22.05, 21.27, 23.01],
      },

      {
        name: "私人成立",
        type: "bar",
        stack: "总量",
        itemStyle: {
          normal: {
            color: "rgba(0,191,183,1)",
            barBorderRadius: 0,
            label: {
              show: true,
              position: "inside",
              formatter: function (p) {
                return p.value > 0 ? p.value : "";
              },
            },
          },
        },
        data: [
          21.83, 20.55, 22.46, 18.16, 16.70, 15.22, 15.34, 16.05, 15.88, 16.70, 17.57, 17.71, 14.37, 15.02, 13.68],
      },
      {
        name: "村卫生室个数",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          normal: {
            color: "rgba(252,230,48,1)",
            barBorderRadius: 0,
            label: {
              show: true,
              position: "top",
              formatter: function (p) {
                return p.value > 0 ? p.value : "";
              },
            },
          },
        },
        data: [
          75.64, 67.34, 56.41, 52.37, 54.60, 45.32, 46.66, 42.99, 40.04, 41.71, 38.84, 41.23, 36.42, 36.29, 36.69],
      },
    ],
  };




  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();


//左3 图2


(function () {

  var myChart = echarts.init(document.querySelector(".pie .chart"));
  data = [
    {
      "value": 0.6,
      "name": "0-4岁"
    },
    {
      "value": 1.5,
      "name": "5-9岁"
    },
    {
      "value": 4.6,
      "name": "10-14岁"
    },
    {
      "value": 3.6,
      "name": "15-19岁"
    },
    {
      "value": 2.4,
      "name": "20-24岁"
    },
    {
      "value": 4.1,
      "name": "25-29岁"
    },
    {
      "value": 8.4,
      "name": "30-34岁"
    },
    {
      "value": 7.1,
      "name": "35-39岁"
    },
    {
      "value": 9.7,
      "name": "40-44岁"
    },
    {
      "value": 15.6,
      "name": "45-49岁"
    },
    {
      "value": 17.0,
      "name": "50-54岁"
    },
    {
      "value": 34.7,
      "name": "55-59岁"
    },
    {
      "value": 23.7,
      "name": "60-64岁"
    },
    {
      "value": 20.8,
      "name": "65-69岁"
    },
    {
      "value": 22.4,
      "name": "70-74岁"
    },
    {
      "value": 11.6,
      "name": "75-79岁"
    },
    {
      "value": 6.1,
      "name": "80岁以上"
    }
  ];

  for (var n in data) {
    data[n]["name"] = data[n]["name"] + " " + data[n]["value"] + "%";
  }

  option = {
    // backgroundColor: "#000",
    title: {
      text: "目前农村老龄化占比",
      // subtext: "纯属虚构",
      left: "50%",
      top: "10",
      textAlign: "center",
      textStyle: {
        color: "white",
        fontWeight: "normal",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}",
    },
    series: [
      {
        type: "treemap",
        width: "100%",
        height: "85%",
        top: "15%",
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
          show: false,
        },
        label: {
          //描述了每个矩形中，文本标签的样式。
          normal: {
            show: true,
            position: ["10%", "40%"],
          },
        },
        itemStyle: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
            borderWidth: 1,
            borderColor: "#fff",
          },

          emphasis: {
            label: {
              show: true,
            },
          },
        },
        data: data,
      },
    ],
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//左3 图3
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart2"));
  var xData = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008

  ]

  option = {
    //   backgroundColor: "#1A1835",
    title: {
      top: "10px",
      text: "农村社会服务机构统计",
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: 110,
      bottom: 45,
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      x: "46%",
      top: "11%",
      textStyle: {
        color: "#90979c",
      },
      data: ["老年人与残疾人服务机构(个)", "儿童福利机构单位数(个)"],
    },

    calculable: true,
    xAxis: [
      {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "rgba(204,187,225,0.5)",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: xData,
      },
    ],

    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(204,187,225,0.5)",
          },
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        height: 20,
        xAxisIndex: [0],
        bottom: 0,

        start: 10,
        end: 80,
        handleIcon:
          "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
          color: "#5B3AAE",
        },
        textStyle: {
          color: "rgba(204,187,225,0.5)",
        },
        fillerColor: "rgba(67,55,160,0.4)",
        borderColor: "rgba(204,187,225,0.5)",
      },
      {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: "老年人与残疾人服务机构(个)",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          color: "#6f7de3",
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          data: [
            {
              type: "max",
              name: "最大值",
            },
            {
              type: "min",
              name: "最小值",
            },
          ],
        },
        data: [
          40000, 40000, 38000, 34000, 30000, 29000, 28000, 27752, 33043, 32475, 34304, 32828, 29904, 23671, 20271


        ],
      },
      {
        name: "儿童福利机构单位数(个)",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        itemStyle: {
          color: "#c257F6",
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          data: [
            {
              type: "max",
              name: "最大值",
            },
            {
              type: "min",
              name: "最小值",
            },
          ],
        },
        data: [
          43000, 42534, 40852, 37021, 31291, 31929, 31912, 31187, 36810, 35977, 38078, 35973, 34482, 23944, 21099

        ],
      },
    ],
  };



  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//左3 图4
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart3"));

  var option = {
    title: {
      top: "10px",
      text: "脱贫成果",
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: 'item',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '0%',
      top: '20%',
      containLabel: true
    },
    legend: {
      data: ['农村贫困人口', '贫困发生率'],
      left: '17%',
      top: '5%',
      textStyle: {
        color: "#666666"
      },
      itemWidth: 15,
      itemHeight: 10,
      itemGap: 25
    },
    xAxis: {
      type: 'category',
      data: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012'],
      axisLine: {
        lineStyle: {
          color: '#cdd5e2'

        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#666666"
        }
      },
    },

    yAxis: [{

    },
    {
      type: "value",
      name: "百分比",
      nameTextStyle: {
        color: "#666666"
      },
      position: "right",
      axisLine: {
        lineStyle: {
          color: '#cdd5e2'
        }
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        formatter: "{value} %", //右侧Y轴文字显示
        textStyle: {
          color: "#666666"
        }
      }
    }
    ],
    series: [{
      name: '农村贫困人口',
      type: 'bar',
      barWidth: '12px',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#29acff'
          }, {
            offset: 1,
            color: '#4bdfff'
          }]),
          barBorderRadius: 6,
        },
      },
      data: [0, 551, 1660, 1786, 2531, 3046, 4335, 5575, 6567, 7032, 9422]
    },
    {
      name: "贫困发生率",
      type: "line",
      yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      smooth: false, //平滑曲线显示

      symbol: "circle", //标记的图形为实心圆
      symbolSize: 8, //标记的大小
      itemStyle: {
        normal: {
          color: '#ffa43a',
          borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
          borderWidth: 5
        },

      },
      lineStyle: {
        color: "#ffa43a"
      },

      data: [0.0, 0.6, 1.7, 3.1, 4.5, 5.7, 7.2, 14.2, 16.8]
    }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//右1
(function () {

  // Generate data
  var myChart = echarts.init(document.querySelector(".bar1 .chart2"));
  var category = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];
  var dottedBase = [];
  //农民工规模(万人)
  var lineData = [
    26894, 27395, 27747, 28171, 28652, 28836, 29077, 28560, 29251, 29562,
  ];
  //外出农民工规模(万人)
  var barData = [
    16610, 16821, 16884, 16934, 17185, 17266, 17425, 16959, 17172, 17190,
  ];
  //本地农民工规模(万人)
  var cData = [
    10284, 10574, 10863, 11237, 11467, 11570, 11652, 11601, 12079, 12372,
  ];
  //跨省流动农民工规模(万人)
  var dData = [
    7739, 7867, 7745, 7666, 7675, 7594, 7508, 7052, 7130, 7061,
  ];
  //农民工月均收入(元)
  var rateData = [
    2609, 2864, 3072, 3275, 3485, 3721, 3962, 4072, 4432, 4615,
  ];

  // option
  option = {
    title: {
      text: "农民工规模",
      x: "center",
      y: 0,
      textStyle: {
        color: '#fff',

      },
    },

    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255,255,255,0.7)",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
          backgroundColor: "#7B7DDC",
        },
      },
    },
    legend: {
      data: ["农民工规模", "外出农民工规模", "本地农民工规模", "跨省流动农民工规模"],
      left: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: 11,
      },
      top: "10%",
    },
    grid: {
      x: "55",
      width: "80%",

      top: 80,
      bottom: 20,
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#B4B4B4",
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "value",
        scale: true,
        splitLine: {
          show: false
        },
        name: "万人",

        axisLine: {
          lineStyle: {
            color: "#B4B4B4",
          },
        },

        axisLabel: {
          formatter: "{value} ",
        },
      },
      {
        type: "value",
        splitLine: { show: false },
        name: "收入(元)",
        scale: true,
        axisLine: {
          lineStyle: {
            color: "#B4B4B4",
          },
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],

    series: [
      {
        name: "农民工月均收入(元)",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: "#F02FC2",
          },
        },
        data: rateData,
      },
      {
        name: "跨省流动农民工规模",
        type: "bar",
        barWidth: 8,

        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#dd535d" },
              { offset: 1, color: "#ffbb17" },
            ]),
          },
        },
        data: dData,
      },
      //本地农民工规模(万人)
      {
        name: "本地农民工规模",
        type: "bar",
        barWidth: 8,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#fa8340" },
              { offset: 1, color: "#00758c" },
            ]),
          },
        },
        data: cData,
      },
      {
        name: "农民工规模",
        type: "bar",
        barWidth: 8,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "#2b3f59" },
              { offset: 0.3, color: "#682c4f" },
              { offset: 0, color: "#b43463" },
            ]),
          },
        },
        z: -12,

        data: lineData,
      },
      {
        name: "外出农民工规模",
        type: "bar",
        barWidth: 8,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#fb6456" },
              { offset: 1, color: "#1a6084" },
            ]),
          },
        },
        data: barData,
      },

    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


//右2
// 折线图 优秀作品
(function () {

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    // title: {
    //   text: '城乡就业情况',
    //   textStyle: {
    //     color: '#fff',
    //   },
    // },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['就业人员(万人)', '城镇就业人员(万人)', '乡村就业人员(万人)'],
      textStyle: {
        color: "#ffffff",
      },
      top: "0%",
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      top:'10%',
      left: '3%',
      right: '4%',
      bottom: '6%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012']
      }
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
      }
    ],
    series: [
      {
        type: "value",
        scale: true,
        name: '就业人员(万人)',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [74652, 75064, 75447, 75782, 76058, 76245, 76320, 76349, 76301, 76254,]
      },
      {
        type: "value",
        scale: true,
        name: '城镇就业人员(万人)',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [46773, 46271, 45249, 44292, 43208, 42051, 40916, 39703, 38527, 37287,]
      },
      {
        type: "value",
        scale: true,
        name: '乡村就业人员(万人)',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [27879, 28793, 30198, 31490, 32850, 34194, 35404, 36646, 37774, 38967,]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

