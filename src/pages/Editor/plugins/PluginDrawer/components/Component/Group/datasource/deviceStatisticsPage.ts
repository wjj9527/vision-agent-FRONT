export const deviceStatisticsPage = {
  schema: {
      "label": "子容器",
      "type": "container",
      "value": "BasicContainer",
      "id": "z28swxpt-zf6u-446w-0d1u-5nwgxbwyzmqe",
      "icon": "icon-m-lierongqi",
      "data": {
        "style": {
          "display": "flex",
          "flexDirection": "column",
          "justifyContent": "flex-start",
          "alignItems": "stretch",
          "flexWrap": "nowrap",
          "marginTop": "0",
          "marginBottom": "0",
          "marginLeft": "0",
          "marginRight": "0",
          "paddingTop": "0",
          "paddingBottom": "0",
          "paddingLeft": "0",
          "paddingRight": "0",
          "width": "100",
          "height": "100",
          "widthPrefix": "%",
          "heightPrefix": "%",
          "overflowX": "auto",
          "overflowY": "auto",
          "flex": "0 1 auto"
        }
      },
      "children": [
        {
          "label": "子容器",
          "type": "container",
          "value": "BasicContainer",
          "id": "zush8rat-muk2-4f05-0g5z-9ltqxg3sxqt8",
          "icon": "icon-m-lierongqi",
          "data": {
            "style": {
              "display": "block",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignItems": "flex-start",
              "flexWrap": "nowrap",
              "marginTop": "0",
              "marginBottom": "0",
              "marginLeft": "0",
              "marginRight": "0",
              "paddingTop": "0",
              "paddingBottom": "0",
              "paddingLeft": "0",
              "paddingRight": "0",
              "width": "100",
              "height": null,
              "widthPrefix": "%",
              "heightPrefix": "px",
              "overflowX": "auto",
              "overflowY": "auto",
              "flex": "0 1 auto"
            }
          },
          "children": [
            {
              "label": "卡片组",
              "type": "container",
              "value": "CardGroup",
              "id": "d22f17yt-9kr8-47ve-qy3v-3ny05p35zzkt",
              "icon": "icon-qiapianshuliang",
              "data": {
                "datasource": {
                  "result": 0,
                  "message": "成功！",
                  "guid": null,
                  "data": {
                    "deviceFault": [
                      {
                        "count": 9,
                        "name": "空调机组",
                        "deviceTypeId": 2,
                        "faultCount": 1,
                        "img": "airConditioner",
                        "text": "Air conditioner"
                      },
                      {
                        "count": 6,
                        "name": "照明",
                        "deviceTypeId": 3,
                        "faultCount": 1,
                        "img": "interlligentlight",
                        "text": "Interlligentlight"
                      },
                      {
                        "count": 3,
                        "name": "水表",
                        "deviceTypeId": 4,
                        "faultCount": 0,
                        "img": "waterMeter",
                        "text": "Water Meter"
                      },
                      {
                        "count": 7,
                        "name": "风机",
                        "deviceTypeId": 5,
                        "faultCount": 1,
                        "img": "draughtFan",
                        "text": "Draught Fan"
                      },
                      {
                        "count": 5,
                        "name": "水泵",
                        "deviceTypeId": 6,
                        "faultCount": 1,
                        "img": "pump",
                        "text": "Pump"
                      },
                      {
                        "count": 4,
                        "name": "电梯",
                        "deviceTypeId": 7,
                        "faultCount": 1,
                        "img": "elevater",
                        "text": "Elevater"
                      },
                      {
                        "count": 3,
                        "name": "电表",
                        "deviceTypeId": 10,
                        "faultCount": 0,
                        "img": "ammeter",
                        "text": "Ammeter"
                      }
                    ]
                  }
                },
                "attribute": {
                  "size": "large",
                  "style": "left",
                  "space": "default",
                  "iconSize": "default",
                  "badge": true
                },
                "onlineXHR": {
                  "list": {
                    "isOnline": false,
                    "url": "/api/material/CardGroup/list"
                  }
                }
              }
            }
          ]
        },
        {
          "label": "子容器",
          "type": "container",
          "value": "BasicContainer",
          "id": "7etfu0xv-311w-4w39-jx2m-3q6p5wyw5d0h",
          "icon": "icon-m-lierongqi",
          "data": {
            "style": {
              "display": "block",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignItems": "flex-start",
              "flexWrap": "nowrap",
              "marginTop": "0",
              "marginBottom": "0",
              "marginLeft": "0",
              "marginRight": "0",
              "paddingTop": "0",
              "paddingBottom": "0",
              "paddingLeft": "0",
              "paddingRight": "0",
              "width": null,
              "height": null,
              "widthPrefix": "px",
              "heightPrefix": "px",
              "overflowX": "auto",
              "overflowY": "auto",
              "flex": "1"
            }
          },
          "children": [
            {
              "label": "子容器",
              "type": "container",
              "value": "BasicContainer",
              "id": "wv8lwpw5-gfw9-4ke8-lrnv-r7nwwcr2p1fp",
              "icon": "icon-m-lierongqi",
              "data": {
                "style": {
                  "display": "block",
                  "flexDirection": "row",
                  "justifyContent": "flex-start",
                  "alignItems": "flex-start",
                  "flexWrap": "nowrap",
                  "marginTop": "0",
                  "marginBottom": "0",
                  "marginLeft": "0",
                  "marginRight": "0",
                  "paddingTop": "0",
                  "paddingBottom": "0",
                  "paddingLeft": "0",
                  "paddingRight": "0",
                  "width": null,
                  "height": null,
                  "widthPrefix": "px",
                  "heightPrefix": "px",
                  "overflowX": "auto",
                  "overflowY": "auto",
                  "flex": "0 1 auto"
                }
              },
              "children": [
                {
                  "label": "警报表格",
                  "type": "AlarmTable",
                  "value": "AlarmTable",
                  "id": "tfmkkj6v-76fc-47mq-bn7u-0r8m93t6bcqy",
                  "icon": "icon-biaodanzujian-biaoge",
                  "data": {
                    "style": {
                      "display": "block",
                      "flexDirection": "row",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start",
                      "flexWrap": "nowrap",
                      "marginTop": "0",
                      "marginBottom": "0",
                      "marginLeft": "0",
                      "marginRight": "0",
                      "paddingTop": "0",
                      "paddingBottom": "0",
                      "paddingLeft": "0",
                      "paddingRight": "0",
                      "width": null,
                      "height": null,
                      "widthPrefix": "px",
                      "heightPrefix": "px"
                    },
                    "attribute": {
                      "title": "柱状图",
                      "chartType": "clustered",
                      "chartDisplayMode": "y",
                      "offsetXTitle": "x",
                      "offsetYTitle": "y",
                      "legendVisible": false,
                      "legendX": "left",
                      "legendY": "top",
                      "gridVisible": [],
                      "gridXLineStyleType": "solid",
                      "gridXLineStyleColor": "#ddd",
                      "gridYLineStyleType": "solid",
                      "gridYLineStyleColor": "#ddd",
                      "dataTag": false,
                      "legendLayout": "horizontal"
                    },
                    "onlineXHR": {
                      "list": {
                        "isOnline": false,
                        "url": "/api/material/CardGroup/list"
                      },
                      "confirmed": {
                        "isOnline": false,
                        "url": null
                      },
                      "unconfirmed": {
                        "isOnline": false,
                        "url": null
                      }
                    },
                    "datasource": {
                      "confirmed": {
                        "result": 0,
                        "message": "成功！",
                        "guid": null,
                        "page": 1,
                        "pageSize": 5,
                        "total": 62,
                        "data": [
                          {
                            "id": 5,
                            "waringTime": "2023-02-10 11:36:04",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组03",
                            "gatewayPointName": "空调机组03当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1201,
                            "isEliminate": 1201,
                            "floorName": "3F"
                          },
                          {
                            "id": 4,
                            "waringTime": "2023-02-10 11:36:04",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组02",
                            "gatewayPointName": "空调机组02当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1201,
                            "isEliminate": 1201,
                            "floorName": "2F"
                          },
                          {
                            "id": 6,
                            "waringTime": "2023-02-10 11:36:04",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组04",
                            "gatewayPointName": "空调机组04当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1201,
                            "isEliminate": 1201,
                            "floorName": "4F"
                          },
                          {
                            "id": 2,
                            "waringTime": "2023-02-10 11:33:18",
                            "waringTypeName": "设备故障",
                            "waringDeviceName": "照明03",
                            "gatewayPointName": "照明03故障状态",
                            "waringValue": "1.0",
                            "rangeValue": "0~0",
                            "isConfirm": 1201,
                            "isEliminate": 1201,
                            "floorName": "3F"
                          },
                          {
                            "id": 1,
                            "waringTime": "2023-02-10 11:30:45",
                            "waringTypeName": "设备故障",
                            "waringDeviceName": "空调机组04",
                            "gatewayPointName": "空调机组04故障状态",
                            "waringValue": "1.0",
                            "rangeValue": "0~0",
                            "isConfirm": 1201,
                            "isEliminate": 1201,
                            "floorName": "4F"
                          }
                        ]
                      },
                      "unconfirmed": {
                        "result": 0,
                        "message": "成功！",
                        "guid": null,
                        "page": 1,
                        "pageSize": 5,
                        "total": 274,
                        "data": [
                          {
                            "id": 3,
                            "waringTime": "2023-02-10 11:36:04",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组01",
                            "gatewayPointName": "空调机组01当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1202,
                            "isEliminate": 1202,
                            "floorName": "1F"
                          },
                          {
                            "id": 29,
                            "waringTime": "2023-01-15 00:00:00",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组01",
                            "gatewayPointName": "空调机组01当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1202,
                            "isEliminate": 1202,
                            "floorName": "1F"
                          },
                          {
                            "id": 15,
                            "waringTime": "2023-01-01 00:00:00",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组01",
                            "gatewayPointName": "空调机组01当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1202,
                            "isEliminate": 1202,
                            "floorName": "1F"
                          },
                          {
                            "id": 66,
                            "waringTime": "2023-02-21 11:36:00",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组03",
                            "gatewayPointName": "空调机组03当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1202,
                            "isEliminate": 1201,
                            "floorName": "3F"
                          },
                          {
                            "id": 61,
                            "waringTime": "2023-02-16 11:36:00",
                            "waringTypeName": "数值报警",
                            "waringDeviceName": "空调机组03",
                            "gatewayPointName": "空调机组03当前温度",
                            "waringValue": "33.0",
                            "rangeValue": "26~30",
                            "isConfirm": 1202,
                            "isEliminate": 1201,
                            "floorName": "3F"
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            {
              "label": "子容器",
              "type": "container",
              "value": "BasicContainer",
              "id": "r3tvb0ja-4lw8-4b2k-mxrs-yvhj71lkf44a",
              "icon": "icon-m-lierongqi",
              "data": {
                "style": {
                  "display": "flex",
                  "flexDirection": "row",
                  "justifyContent": "flex-start",
                  "alignItems": "flex-start",
                  "flexWrap": "nowrap",
                  "marginTop": "0",
                  "marginBottom": "0",
                  "marginLeft": "0",
                  "marginRight": "0",
                  "paddingTop": "0",
                  "paddingBottom": "0",
                  "paddingLeft": "0",
                  "paddingRight": "0",
                  "width": null,
                  "height": null,
                  "widthPrefix": "px",
                  "heightPrefix": "px",
                  "overflowX": "auto",
                  "overflowY": "auto",
                  "flex": "0 1 auto"
                }
              },
              "children": [
                {
                  "label": "子容器",
                  "type": "container",
                  "value": "BasicContainer",
                  "id": "pyf61m95-e1zz-460k-w7tl-45en7lx0kes7",
                  "icon": "icon-m-lierongqi",
                  "data": {
                    "style": {
                      "display": "block",
                      "flexDirection": "row",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start",
                      "flexWrap": "nowrap",
                      "marginTop": "10",
                      "marginBottom": "10",
                      "marginLeft": "10",
                      "marginRight": "10",
                      "paddingTop": "10",
                      "paddingBottom": "10",
                      "paddingLeft": "10",
                      "paddingRight": "10",
                      "width": "",
                      "height": "300",
                      "widthPrefix": "px",
                      "heightPrefix": "px",
                      "overflowX": "auto",
                      "overflowY": "auto",
                      "flex": "1"
                    }
                  },
                  "children": [
                    {
                      "label": "柱状图",
                      "type": "BarGraph",
                      "value": "BarGraph",
                      "id": "86hjklfw-2ctt-45rm-rx86-z60ctds07vva",
                      "icon": "icon-tiaoxingtu",
                      "data": {
                        "style": {
                          "display": "block",
                          "flexDirection": "row",
                          "justifyContent": "flex-start",
                          "alignItems": "flex-start",
                          "flexWrap": "nowrap",
                          "marginTop": "0",
                          "marginBottom": "0",
                          "marginLeft": "0",
                          "marginRight": "0",
                          "paddingTop": "0",
                          "paddingBottom": "0",
                          "paddingLeft": "0",
                          "paddingRight": "0",
                          "width": null,
                          "height": null,
                          "widthPrefix": "px",
                          "heightPrefix": "px"
                        },
                        "attribute": {
                          "title": "柱状图",
                          "chartType": "clustered",
                          "chartDisplayMode": "y",
                          "offsetXTitle": "x",
                          "offsetYTitle": "y",
                          "legendVisible": false,
                          "legendX": "left",
                          "legendY": "top",
                          "gridVisible": [],
                          "gridXLineStyleType": "solid",
                          "gridXLineStyleColor": "#ddd",
                          "gridYLineStyleType": "solid",
                          "gridYLineStyleColor": "#ddd",
                          "dataTag": false,
                          "legendLayout": "horizontal"
                        },
                        "datasource": {
                          "data": [
                            "空调机组",
                            "照明",
                            "水表",
                            "风机",
                            "水泵",
                            "电梯",
                            "电表"
                          ],
                          "series": [
                            {
                              "name": "在线数",
                              "data": [
                                8,
                                6,
                                3,
                                7,
                                5,
                                4,
                                0
                              ]
                            },
                            {
                              "name": "离线数",
                              "data": [
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "label": "子容器",
                  "type": "container",
                  "value": "BasicContainer",
                  "id": "vc3seyky-55h1-4xd5-s955-965hxh7sx6tg",
                  "icon": "icon-m-lierongqi",
                  "data": {
                    "style": {
                      "display": "block",
                      "flexDirection": "row",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start",
                      "flexWrap": "nowrap",
                      "marginTop": "10",
                      "marginBottom": "10",
                      "marginLeft": "10",
                      "marginRight": "10",
                      "paddingTop": "10",
                      "paddingBottom": "10",
                      "paddingLeft": "10",
                      "paddingRight": "10",
                      "width": null,
                      "height": "300",
                      "widthPrefix": "px",
                      "heightPrefix": "px",
                      "overflowX": "auto",
                      "overflowY": "auto",
                      "flex": "1"
                    }
                  },
                  "children": [
                    {
                      "label": "折线图",
                      "type": "LineGraph",
                      "value": "LineGraph",
                      "id": "zlm07zq9-9azv-446l-912z-xje07ghbg4pl",
                      "icon": "icon-zhexiantu",
                      "data": {
                        "style": {
                          "display": "block",
                          "flexDirection": "row",
                          "justifyContent": "flex-start",
                          "alignItems": "flex-start",
                          "flexWrap": "nowrap",
                          "marginTop": "0",
                          "marginBottom": "0",
                          "marginLeft": "0",
                          "marginRight": "0",
                          "paddingTop": "0",
                          "paddingBottom": "0",
                          "paddingLeft": "0",
                          "paddingRight": "0",
                          "width": null,
                          "height": null,
                          "widthPrefix": "px",
                          "heightPrefix": "px"
                        },
                        "attribute": {
                          "title": "折线图",
                          "chartType": "line",
                          "chartDisplayMode": "y",
                          "offsetXTitle": "x",
                          "offsetYTitle": "y",
                          "legendVisible": false,
                          "legendX": "left",
                          "legendY": "top",
                          "gridVisible": [],
                          "gridXLineStyleType": "solid",
                          "gridXLineStyleColor": "#dddddd",
                          "gridYLineStyleType": "solid",
                          "gridYLineStyleColor": "#dddddd",
                          "dataTag": false,
                          "legendLayout": "horizontal"
                        },
                        "datasource": {
                          "data": [
                            "空调机组",
                            "照明",
                            "水表",
                            "风机",
                            "水泵",
                            "电梯",
                            "电表"
                          ],
                          "series": [
                            {
                              "name": "在线数",
                              "data": [
                                8,
                                6,
                                3,
                                7,
                                5,
                                4,
                                0
                              ]
                            },
                            {
                              "name": "离线数",
                              "data": [
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "label": "子容器",
              "type": "container",
              "value": "BasicContainer",
              "id": "lx80tq65-7z3a-4rws-m7uj-0vbezd1h80sk",
              "icon": "icon-m-lierongqi",
              "data": {
                "style": {
                  "display": "flex",
                  "flexDirection": "row",
                  "justifyContent": "flex-start",
                  "alignItems": "flex-start",
                  "flexWrap": "nowrap",
                  "marginTop": "0",
                  "marginBottom": "0",
                  "marginLeft": "0",
                  "marginRight": "0",
                  "paddingTop": "0",
                  "paddingBottom": "0",
                  "paddingLeft": "0",
                  "paddingRight": "0",
                  "width": null,
                  "height": null,
                  "widthPrefix": "px",
                  "heightPrefix": "px",
                  "overflowX": "auto",
                  "overflowY": "auto",
                  "flex": "0 1 auto"
                }
              },
              "children": [
                {
                  "label": "子容器",
                  "type": "container",
                  "value": "BasicContainer",
                  "id": "u2h5404y-qhs3-47cr-0dws-f3f94sy6quf0",
                  "icon": "icon-m-lierongqi",
                  "data": {
                    "style": {
                      "display": "block",
                      "flexDirection": "row",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start",
                      "flexWrap": "nowrap",
                      "marginTop": "10",
                      "marginBottom": "10",
                      "marginLeft": "10",
                      "marginRight": "10",
                      "paddingTop": "10",
                      "paddingBottom": "10",
                      "paddingLeft": "10",
                      "paddingRight": "10",
                      "width": "",
                      "height": "300",
                      "widthPrefix": "px",
                      "heightPrefix": "px",
                      "overflowX": "auto",
                      "overflowY": "auto",
                      "flex": "1"
                    }
                  },
                  "children": [
                    {
                      "label": "柱状图",
                      "type": "BarGraph",
                      "value": "BarGraph",
                      "id": "htc6q8eq-0te6-4fc9-bb6z-gkcucykrvymq",
                      "icon": "icon-tiaoxingtu",
                      "data": {
                        "style": {
                          "display": "block",
                          "flexDirection": "row",
                          "justifyContent": "flex-start",
                          "alignItems": "flex-start",
                          "flexWrap": "nowrap",
                          "marginTop": "0",
                          "marginBottom": "0",
                          "marginLeft": "0",
                          "marginRight": "0",
                          "paddingTop": "0",
                          "paddingBottom": "0",
                          "paddingLeft": "0",
                          "paddingRight": "0",
                          "width": null,
                          "height": null,
                          "widthPrefix": "px",
                          "heightPrefix": "px"
                        },
                        "attribute": {
                          "title": "柱状图",
                          "chartType": "clustered",
                          "chartDisplayMode": "y",
                          "offsetXTitle": "x",
                          "offsetYTitle": "y",
                          "legendVisible": false,
                          "legendX": "left",
                          "legendY": "top",
                          "gridVisible": [],
                          "gridXLineStyleType": "solid",
                          "gridXLineStyleColor": "#ddd",
                          "gridYLineStyleType": "solid",
                          "gridYLineStyleColor": "#ddd",
                          "dataTag": false,
                          "legendLayout": "horizontal"
                        },
                        "datasource": {
                          "data": [
                            "空调机组",
                            "照明",
                            "水表",
                            "风机",
                            "水泵",
                            "电梯",
                            "电表"
                          ],
                          "series": [
                            {
                              "name": "在线数",
                              "data": [
                                8,
                                6,
                                3,
                                7,
                                5,
                                4,
                                0
                              ]
                            },
                            {
                              "name": "离线数",
                              "data": [
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "label": "子容器",
                  "type": "container",
                  "value": "BasicContainer",
                  "id": "cyya78mf-wy27-4s3t-ztm7-k5dhjebjwr7n",
                  "icon": "icon-m-lierongqi",
                  "data": {
                    "style": {
                      "display": "block",
                      "flexDirection": "row",
                      "justifyContent": "flex-start",
                      "alignItems": "flex-start",
                      "flexWrap": "nowrap",
                      "marginTop": "10",
                      "marginBottom": "10",
                      "marginLeft": "10",
                      "marginRight": "10",
                      "paddingTop": "10",
                      "paddingBottom": "10",
                      "paddingLeft": "10",
                      "paddingRight": "10",
                      "width": null,
                      "height": "300",
                      "widthPrefix": "px",
                      "heightPrefix": "px",
                      "overflowX": "auto",
                      "overflowY": "auto",
                      "flex": "1"
                    }
                  },
                  "children": [
                    {
                      "label": "折线图",
                      "type": "LineGraph",
                      "value": "LineGraph",
                      "id": "h6g3wwph-6n1z-4wg7-etqe-4z8rybywfua5",
                      "icon": "icon-zhexiantu",
                      "data": {
                        "style": {
                          "display": "block",
                          "flexDirection": "row",
                          "justifyContent": "flex-start",
                          "alignItems": "flex-start",
                          "flexWrap": "nowrap",
                          "marginTop": "0",
                          "marginBottom": "0",
                          "marginLeft": "0",
                          "marginRight": "0",
                          "paddingTop": "0",
                          "paddingBottom": "0",
                          "paddingLeft": "0",
                          "paddingRight": "0",
                          "width": null,
                          "height": null,
                          "widthPrefix": "px",
                          "heightPrefix": "px"
                        },
                        "attribute": {
                          "title": "折线图",
                          "chartType": "line",
                          "chartDisplayMode": "y",
                          "offsetXTitle": "x",
                          "offsetYTitle": "y",
                          "legendVisible": false,
                          "legendX": "left",
                          "legendY": "top",
                          "gridVisible": [],
                          "gridXLineStyleType": "solid",
                          "gridXLineStyleColor": "#dddddd",
                          "gridYLineStyleType": "solid",
                          "gridYLineStyleColor": "#dddddd",
                          "dataTag": false,
                          "legendLayout": "horizontal"
                        },
                        "datasource": {
                          "data": [
                            "空调机组",
                            "照明",
                            "水表",
                            "风机",
                            "水泵",
                            "电梯",
                            "电表"
                          ],
                          "series": [
                            {
                              "name": "在线数",
                              "data": [
                                8,
                                6,
                                3,
                                7,
                                5,
                                4,
                                0
                              ]
                            },
                            {
                              "name": "离线数",
                              "data": [
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                3
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  label:'设备统计页面',
  icon:'icon-hengxiangpingfen',
}
