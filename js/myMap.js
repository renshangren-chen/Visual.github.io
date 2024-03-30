(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // // 2. 指定配置和数据
  // var geoCoordMap = {
  //   上海: [121.4648, 31.2891],
  //   东莞: [113.8953, 22.901],
  //   东营: [118.7073, 37.5513],
  //   中山: [113.4229, 22.478],
  //   临汾: [111.4783, 36.1615],
  //   临沂: [118.3118, 35.2936],
  //   丹东: [124.541, 40.4242],
  //   丽水: [119.5642, 28.1854],
  //   乌鲁木齐: [87.9236, 43.5883],
  //   佛山: [112.8955, 23.1097],
  //   保定: [115.0488, 39.0948],
  //   兰州: [103.5901, 36.3043],
  //   包头: [110.3467, 41.4899],
  //   北京: [116.4551, 40.2539],
  //   北海: [109.314, 21.6211],
  //   南京: [118.8062, 31.9208],
  //   南宁: [108.479, 23.1152],
  //   南昌: [116.0046, 28.6633],
  //   南通: [121.1023, 32.1625],
  //   厦门: [118.1689, 24.6478],
  //   台州: [121.1353, 28.6688],
  //   合肥: [117.29, 32.0581],
  //   呼和浩特: [111.4124, 40.4901],
  //   咸阳: [108.4131, 34.8706],
  //   哈尔滨: [127.9688, 45.368],
  //   唐山: [118.4766, 39.6826],
  //   嘉兴: [120.9155, 30.6354],
  //   大同: [113.7854, 39.8035],
  //   大连: [122.2229, 39.4409],
  //   天津: [117.4219, 39.4189],
  //   太原: [112.3352, 37.9413],
  //   威海: [121.9482, 37.1393],
  //   宁波: [121.5967, 29.6466],
  //   宝鸡: [107.1826, 34.3433],
  //   宿迁: [118.5535, 33.7775],
  //   常州: [119.4543, 31.5582],
  //   广州: [113.5107, 23.2196],
  //   廊坊: [116.521, 39.0509],
  //   延安: [109.1052, 36.4252],
  //   张家口: [115.1477, 40.8527],
  //   徐州: [117.5208, 34.3268],
  //   德州: [116.6858, 37.2107],
  //   惠州: [114.6204, 23.1647],
  //   成都: [103.9526, 30.7617],
  //   扬州: [119.4653, 32.8162],
  //   承德: [117.5757, 41.4075],
  //   拉萨: [91.1865, 30.1465],
  //   无锡: [120.3442, 31.5527],
  //   日照: [119.2786, 35.5023],
  //   昆明: [102.9199, 25.4663],
  //   杭州: [119.5313, 29.8773],
  //   枣庄: [117.323, 34.8926],
  //   柳州: [109.3799, 24.9774],
  //   株洲: [113.5327, 27.0319],
  //   武汉: [114.3896, 30.6628],
  //   汕头: [117.1692, 23.3405],
  //   江门: [112.6318, 22.1484],
  //   沈阳: [123.1238, 42.1216],
  //   沧州: [116.8286, 38.2104],
  //   河源: [114.917, 23.9722],
  //   泉州: [118.3228, 25.1147],
  //   泰安: [117.0264, 36.0516],
  //   泰州: [120.0586, 32.5525],
  //   济南: [117.1582, 36.8701],
  //   济宁: [116.8286, 35.3375],
  //   海口: [110.3893, 19.8516],
  //   淄博: [118.0371, 36.6064],
  //   淮安: [118.927, 33.4039],
  //   深圳: [114.5435, 22.5439],
  //   清远: [112.9175, 24.3292],
  //   温州: [120.498, 27.8119],
  //   渭南: [109.7864, 35.0299],
  //   湖州: [119.8608, 30.7782],
  //   湘潭: [112.5439, 27.7075],
  //   滨州: [117.8174, 37.4963],
  //   潍坊: [119.0918, 36.524],
  //   烟台: [120.7397, 37.5128],
  //   玉溪: [101.9312, 23.8898],
  //   珠海: [113.7305, 22.1155],
  //   盐城: [120.2234, 33.5577],
  //   盘锦: [121.9482, 41.0449],
  //   石家庄: [114.4995, 38.1006],
  //   福州: [119.4543, 25.9222],
  //   秦皇岛: [119.2126, 40.0232],
  //   绍兴: [120.564, 29.7565],
  //   聊城: [115.9167, 36.4032],
  //   肇庆: [112.1265, 23.5822],
  //   舟山: [122.2559, 30.2234],
  //   苏州: [120.6519, 31.3989],
  //   莱芜: [117.6526, 36.2714],
  //   菏泽: [115.6201, 35.2057],
  //   营口: [122.4316, 40.4297],
  //   葫芦岛: [120.1575, 40.578],
  //   衡水: [115.8838, 37.7161],
  //   衢州: [118.6853, 28.8666],
  //   西宁: [101.4038, 36.8207],
  //   西安: [109.1162, 34.2004],
  //   贵阳: [106.6992, 26.7682],
  //   连云港: [119.1248, 34.552],
  //   邢台: [114.8071, 37.2821],
  //   邯郸: [114.4775, 36.535],
  //   郑州: [113.4668, 34.6234],
  //   鄂尔多斯: [108.9734, 39.2487],
  //   重庆: [107.7539, 30.1904],
  //   金华: [120.0037, 29.1028],
  //   铜川: [109.0393, 35.1947],
  //   银川: [106.3586, 38.1775],
  //   镇江: [119.4763, 31.9702],
  //   长春: [125.8154, 44.2584],
  //   长沙: [113.0823, 28.2568],
  //   长治: [112.8625, 36.4746],
  //   阳泉: [113.4778, 38.0951],
  //   青岛: [120.4651, 36.3373],
  //   韶关: [113.7964, 24.7028]
  // };

  // var XAData = [
  //   [{ name: "西安" }, { name: "北京", value: 100 }],
  //   [{ name: "西安" }, { name: "上海", value: 100 }],
  //   [{ name: "西安" }, { name: "广州", value: 100 }],
  //   [{ name: "西安" }, { name: "西宁", value: 100 }],
  //   [{ name: "西安" }, { name: "拉萨", value: 100 }]
  // ];

  // var XNData = [
  //   [{ name: "西宁" }, { name: "北京", value: 100 }],
  //   [{ name: "西宁" }, { name: "上海", value: 100 }],
  //   [{ name: "西宁" }, { name: "广州", value: 100 }],
  //   [{ name: "西宁" }, { name: "西安", value: 100 }],
  //   [{ name: "西宁" }, { name: "银川", value: 100 }]
  // ];

  // var YCData = [
  //   [{ name: "拉萨" }, { name: "北京", value: 100 }],
  //   [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
  //   [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
  // ];

  // var planePath =
  //   "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  // //var planePath = 'arrow';
  // var convertData = function(data) {
  //   var res = [];
  //   for (var i = 0; i < data.length; i++) {
  //     var dataItem = data[i];

  //     var fromCoord = geoCoordMap[dataItem[0].name];
  //     var toCoord = geoCoordMap[dataItem[1].name];
  //     if (fromCoord && toCoord) {
  //       res.push({
  //         fromName: dataItem[0].name,
  //         toName: dataItem[1].name,
  //         coords: [fromCoord, toCoord],
  //         value: dataItem[1].value
  //       });
  //     }
  //   }
  //   return res;
  // };

  // var color = ["#fff", "#fff", "#fff"]; //航线的颜色
  // var series = [];
  // [
  //   ["西安", XAData],
  //   ["西宁", XNData],
  //   ["银川", YCData]
  // ].forEach(function(item, i) {
  //   series.push(
  //     {
  //       name: item[0] + " Top3",
  //       type: "lines",
  //       zlevel: 1,
  //       effect: {
  //         show: true,
  //         period: 6,
  //         trailLength: 0.7,
  //         color: "red", //arrow箭头的颜色
  //         symbolSize: 3
  //       },
  //       lineStyle: {
  //         normal: {
  //           color: color[i],
  //           width: 0,
  //           curveness: 0.2
  //         }
  //       },
  //       data: convertData(item[1])
  //     },
  //     {
  //       name: item[0] + " Top3",
  //       type: "lines",
  //       zlevel: 2,
  //       symbol: ["none", "arrow"],
  //       symbolSize: 10,
  //       effect: {
  //         show: true,
  //         period: 6,
  //         trailLength: 0,
  //         symbol: planePath,
  //         symbolSize: 15
  //       },
  //       lineStyle: {
  //         normal: {
  //           color: color[i],
  //           width: 1,
  //           opacity: 0.6,
  //           curveness: 0.2
  //         }
  //       },
  //       data: convertData(item[1])
  //     },
  //     {
  //       name: item[0] + " Top3",
  //       type: "effectScatter",
  //       coordinateSystem: "geo",
  //       zlevel: 2,
  //       rippleEffect: {
  //         brushType: "stroke"
  //       },
  //       label: {
  //         normal: {
  //           show: true,
  //           position: "right",
  //           formatter: "{b}"
  //         }
  //       },
  //       symbolSize: function(val) {
  //         return val[2] / 8;
  //       },
  //       itemStyle: {
  //         normal: {
  //           color: color[i]
  //         },
  //         emphasis: {
  //           areaColor: "#2B91B7"
  //         }
  //       },
  //       data: item[1].map(function(dataItem) {
  //         return {
  //           name: dataItem[1].name,
  //           value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
  //         };
  //       })
  //     }
  //   );
  // });
  // var option = {
  //   tooltip: {
  //     trigger: "item",
  //     formatter: function(params, ticket, callback) {
  //       if (params.seriesType == "effectScatter") {
  //         return "线路：" + params.data.name + "" + params.data.value[2];
  //       } else if (params.seriesType == "lines") {
  //         return (
  //           params.data.fromName +
  //           ">" +
  //           params.data.toName +
  //           "<br />" +
  //           params.data.value
  //         );
  //       } else {
  //         return params.name;
  //       }
  //     }
  //   },

  //   geo: {
  //     map: "china",
  //     label: {
  //       emphasis: {
  //         show: true,
  //         color: "#fff"
  //       }
  //     },
  //     roam: false,
  //     //   放大我们的地图
  //     zoom: 1,
  //     itemStyle: {
  //       normal: {
  //         // 地图省份背景颜色
  //         areaColor: "rgba(43, 196, 243, 0.42)",
  //         borderColor: "rgba(43, 196, 243, 1)",
  //         borderWidth: 1
  //       },
  //       emphasis: {
  //         areaColor: "#2B91B7"
  //       }
  //     }
  //   },
  //   series: series
  // };

  //各省份的地图json文件
  //各省份的地图json文件
  var provinces = {
    上海: "/asset/get/s/data-1482909900836-H1BC_1WHg.json",
    河北: "/asset/get/s/data-1482909799572-Hkgu_yWSg.json",
    山西: "/asset/get/s/data-1482909909703-SyCA_JbSg.json",
    内蒙古: "/asset/get/s/data-1482909841923-rkqqdyZSe.json",
    辽宁: "/asset/get/s/data-1482909836074-rJV9O1-Hg.json",
    吉林: "/asset/get/s/data-1482909832739-rJ-cdy-Hx.json",
    黑龙江: "/asset/get/s/data-1482909803892-Hy4__J-Sx.json",
    江苏: "/asset/get/s/data-1482909823260-HkDtOJZBx.json",
    浙江: "/asset/get/s/data-1482909960637-rkZMYkZBx.json",
    安徽: "/asset/get/s/data-1482909768458-HJlU_yWBe.json",
    福建: "/asset/get/s/data-1478782908884-B1H6yezWe.json",
    江西: "/asset/get/s/data-1482909827542-r12YOJWHe.json",
    山东: "/asset/get/s/data-1482909892121-BJ3auk-Se.json",
    河南: "/asset/get/s/data-1482909807135-SJPudkWre.json",
    湖北: "/asset/get/s/data-1482909813213-Hy6u_kbrl.json",
    湖南: "/asset/get/s/data-1482909818685-H17FOkZSl.json",
    广东: "/asset/get/s/data-1482909784051-BJgwuy-Sl.json",
    广西: "/asset/get/s/data-1482909787648-SyEPuJbSg.json",
    海南: "/asset/get/s/data-1482909796480-H12P_J-Bg.json",
    四川: "/asset/get/s/data-1482909931094-H17eKk-rg.json",
    贵州: "/asset/get/s/data-1482909791334-Bkwvd1bBe.json",
    云南: "/asset/get/s/data-1482909957601-HkA-FyWSx.json",
    西藏: "/asset/get/s/data-1482927407942-SkOV6Qbrl.json",
    陕西: "/asset/get/s/data-1482909918961-BJw1FyZHg.json",
    甘肃: "/asset/get/s/data-1482909780863-r1aIdyWHl.json",
    青海: "/asset/get/s/data-1482909853618-B1IiOyZSl.json",
    宁夏: "/asset/get/s/data-1482909848690-HJWiuy-Bg.json",
    新疆: "/asset/get/s/data-1482909952731-B1YZKkbBx.json",
    北京: "/asset/get/s/data-1482818963027-Hko9SKJrg.json",
    天津: "/asset/get/s/data-1482909944620-r1-WKyWHg.json",
    重庆: "/asset/get/s/data-1482909775470-HJDIdk-Se.json",
    香港: "/asset/get/s/data-1461584707906-r1hSmtsx.json",
    澳门: "/asset/get/s/data-1482909771696-ByVIdJWBx.json",
  };

  //各省份的数据
  var allData = [
    {
      name: "北京",
    },
    {
      name: "天津",
    },
    {
      name: "上海",
    },
    {
      name: "重庆",
    },
    {
      name: "河北",
    },
    {
      name: "河南",
    },
    {
      name: "云南",
    },
    {
      name: "辽宁",
    },
    {
      name: "黑龙江",
    },
    {
      name: "湖南",
    },
    {
      name: "安徽",
    },
    {
      name: "山东",
    },
    {
      name: "新疆",
    },
    {
      name: "江苏",
    },
    {
      name: "浙江",
    },
    {
      name: "江西",
    },
    {
      name: "湖北",
    },
    {
      name: "广西",
    },
    {
      name: "甘肃",
    },
    {
      name: "山西",
    },
    {
      name: "内蒙古",
    },
    {
      name: "陕西",
    },
    {
      name: "吉林",
    },
    {
      name: "福建",
    },
    {
      name: "贵州",
    },
    {
      name: "广东",
    },
    {
      name: "青海",
    },
    {
      name: "西藏",
    },
    {
      name: "四川",
    },
    {
      name: "宁夏",
    },
    {
      name: "海南",
    },
    {
      name: "台湾",
    },
    {
      name: "香港",
    },
    {
      name: "澳门",
    },
  ];
  for (var i = 0; i < allData.length; i++) {
    allData[i].value = Math.round(Math.random() * 100);
  }

  loadMap("/asset/get/s/data-1527045631990-r1dZ0IM1X.json", "china"); //初始化全国地图

  var timeFn = null;

  //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
  myChart.on("click", function (params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function () {
      var name = params.name; //地区name
      var mapCode = provinces[name]; //地区的json数据
      if (!mapCode) {
        alert("无此区域地图显示");
        return;
      }

      loadMap(mapCode, name);
    }, 250);
  });

  // 绑定双击事件，返回全国地图
  myChart.on("dblclick", function (params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);

    //返回全国地图
    loadMap("/asset/get/s/data-1527045631990-r1dZ0IM1X.json", "china");
  });

  /**
   获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
   @params {String} mapCode:json数据的地址
   @params {String} name: 地图名称
   */
  function loadMap(mapCode, name) {
    $.get(mapCode, function (data) {
      if (data) {
        echarts.registerMap(name, data);
        var option = {
          tooltip: {
            show: true,
            formatter: function (params) {
              if (params.data) return params.name + "：" + params.data["value"];
            },
          },
          visualMap: {
            type: "continuous",
            text: ["", ""],
            showLabel: true,
            left: "50",
            min: 0,
            max: 100,
            inRange: {
              color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"],
            },
            splitNumber: 0,
          },
          series: [
            {
              name: "MAP",
              type: "map",
              mapType: name,
              data: allData,
              selectedMode: "false", //是否允许选中多个区域
              label: {
                normal: {
                  show: true,
                  formatter: function (val) {
                    console.log(val, 9999999999);
                    var area_content =
                      "{a|" + val.name + "}" + "-" + "{b|" + val.value + "}";
                    return area_content.split("-").join("\n");
                  }, //让series 中的文字进行换行
                  rich: {
                    a: {
                      color: "#fff",
                    },
                    b: {
                      color: "#fff",
                      fontFamily: "Microsoft YaHei",
                      fontSize: 14,
                      width: 16,
                      height: 16,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#f00",
                      textAlign: "center",
                      padding: 2,
                    },
                  }, //富文本样式,就是上面的formatter中'{a|'和'{b|'
                },
                emphasis: { show: false },
              }, //地图中文字内容及样式控制
            },
          ],
        };
        myChart.setOption(option);
        // curMap = {
        //     mapCode: mapCode,
        //     mapName: name
        // };
      } else {
        alert("无法加载该地图");
      }
    });
  }

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
