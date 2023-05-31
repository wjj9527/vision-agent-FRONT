import type {ElementType} from '@/pages/Editor/Types';

const defaultValue:ElementType = {
  label: '警报表格',
  type: 'AlarmTable',
  value:'AlarmTable',
  id:'',
  icon:'icon-biaodanzujian-biaoge',
  data: {
    style: {
      display: 'block',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '0',
      marginRight: '0',
      paddingTop: '0',
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      width: null,
      height: null,
      widthPrefix: 'px',
      heightPrefix: 'px',
    },
    attribute:{
      title:'柱状图',
      chartType:'clustered',
      chartDisplayMode:'y',
      offsetXTitle:'x',
      offsetYTitle:'y',
      legendVisible:false,
      legendX:'left',
      legendY:'top',
      gridVisible:[],
      gridXLineStyleType:'solid',
      gridXLineStyleColor:'#ddd',
      gridYLineStyleType:'solid',
      gridYLineStyleColor:'#ddd',
      dataTag:false,
      legendLayout:'horizontal'
    },
    onlineXHR:{
      list:{isOnline:false,url:'/api/material/CardGroup/list'},
      confirmed:{isOnline:false,url:null},
      unconfirmed:{isOnline:false,url:null},
    },
    datasource:{
      confirmed:{"result":0,"message":"成功！","guid":null,"page":1,"pageSize":5,"total":62,"data":[{"id":5,"waringTime":"2023-02-10 11:36:04","waringTypeName":"数值报警","waringDeviceName":"空调机组03","gatewayPointName":"空调机组03当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1201,"isEliminate":1201,"floorName":"3F"},{"id":4,"waringTime":"2023-02-10 11:36:04","waringTypeName":"数值报警","waringDeviceName":"空调机组02","gatewayPointName":"空调机组02当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1201,"isEliminate":1201,"floorName":"2F"},{"id":6,"waringTime":"2023-02-10 11:36:04","waringTypeName":"数值报警","waringDeviceName":"空调机组04","gatewayPointName":"空调机组04当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1201,"isEliminate":1201,"floorName":"4F"},{"id":2,"waringTime":"2023-02-10 11:33:18","waringTypeName":"设备故障","waringDeviceName":"照明03","gatewayPointName":"照明03故障状态","waringValue":"1.0","rangeValue":"0~0","isConfirm":1201,"isEliminate":1201,"floorName":"3F"},{"id":1,"waringTime":"2023-02-10 11:30:45","waringTypeName":"设备故障","waringDeviceName":"空调机组04","gatewayPointName":"空调机组04故障状态","waringValue":"1.0","rangeValue":"0~0","isConfirm":1201,"isEliminate":1201,"floorName":"4F"}]},
      unconfirmed:{"result":0,"message":"成功！","guid":null,"page":1,"pageSize":5,"total":274,"data":[{"id":3,"waringTime":"2023-02-10 11:36:04","waringTypeName":"数值报警","waringDeviceName":"空调机组01","gatewayPointName":"空调机组01当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1202,"isEliminate":1202,"floorName":"1F"},{"id":29,"waringTime":"2023-01-15 00:00:00","waringTypeName":"数值报警","waringDeviceName":"空调机组01","gatewayPointName":"空调机组01当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1202,"isEliminate":1202,"floorName":"1F"},{"id":15,"waringTime":"2023-01-01 00:00:00","waringTypeName":"数值报警","waringDeviceName":"空调机组01","gatewayPointName":"空调机组01当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1202,"isEliminate":1202,"floorName":"1F"},{"id":66,"waringTime":"2023-02-21 11:36:00","waringTypeName":"数值报警","waringDeviceName":"空调机组03","gatewayPointName":"空调机组03当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1202,"isEliminate":1201,"floorName":"3F"},{"id":61,"waringTime":"2023-02-16 11:36:00","waringTypeName":"数值报警","waringDeviceName":"空调机组03","gatewayPointName":"空调机组03当前温度","waringValue":"33.0","rangeValue":"26~30","isConfirm":1202,"isEliminate":1201,"floorName":"3F"}]}
    }
  },
}

export default defaultValue
