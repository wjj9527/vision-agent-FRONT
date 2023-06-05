import type {ElementType} from '@/pages/Editor/Types';
const defaultValue:ElementType = {
  label: '警报卡片组',
  type: 'container',
  value:'AlarmCardGroup',
  id:'',
  icon:'icon-qiapianshuliang',
  data: {
    datasource:{"result":0,"message":"成功！","guid":null,"data":{"waringCount":{"value":"322","name":"报警总数"},"eliminatedCount":{"value":"318","name":"已消除报警"},"conversionRate":{"value":"98.7","name":"报警转化率"},"unconfirmedCount":{"value":"261","name":"未确认报警"},"confirmedCount":{"value":"61","name":"已确认报警"},"maxFloor":{"value":"B1F","name":"报警高发楼层"},"maxDevice":{"value":"空调机组","name":"报警高发设备类型"}}},
    attribute:{
      size:'default',
      style:'left',
      space:'default',
      iconSize:'default',
      badge:true,
    },
    onlineXHR:{
      list:{isOnline:false,url:'/api/material/alarmCardGroup/list'},
    }
  },
}

export default defaultValue
