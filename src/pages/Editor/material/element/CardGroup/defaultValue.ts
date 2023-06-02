import type {ElementType} from '@/pages/Editor/Types';
const defaultValue:ElementType = {
  label: '卡片组',
  type: 'container',
  value:'CardGroup',
  id:'',
  icon:'icon-qiapianshuliang',
  data: {
    datasource:{
      "result": 0,
      "message": "成功！",
      "guid": null,
      "data": {
        "deviceFault": [{
          "count": 9,
          "name": "空调机组",
          "deviceTypeId": 2,
          "faultCount": 1,
          "img": "airConditioner",
          "text": "Air conditioner"
        }, {
          "count": 6,
          "name": "照明",
          "deviceTypeId": 3,
          "faultCount": 1,
          "img": "interlligentlight",
          "text": "Interlligentlight"
        }, {
          "count": 3,
          "name": "水表",
          "deviceTypeId": 4,
          "faultCount": 0,
          "img": "waterMeter",
          "text": "Water Meter"

        }, {
          "count": 7,
          "name": "风机",
          "deviceTypeId": 5,
          "faultCount": 1,
          "img": "draughtFan",
          "text": "Draught Fan"
        }, {
          "count": 5,
          "name": "水泵",
          "deviceTypeId": 6,
          "faultCount": 1,
          "img": "pump",
          "text": "Pump"
        }, {
          "count": 4,
          "name": "电梯",
          "deviceTypeId": 7,
          "faultCount": 1,
          "img": "elevater",
          "text": "Elevater"
        }, {
          "count": 3,
          "name": "电表",
          "deviceTypeId": 10,
          "faultCount": 0,
          "img": "ammeter",
          "text": "Ammeter"
        }],
      }
    },
    attribute:{
      size:'default',
      style:'left',
      space:'default',
      iconSize:'default',
      badge:true,
    },
    onlineXHR:{
      list:{isOnline:false,url:'/api/material/CardGroup/list'},
    }
  },
}

export default defaultValue
