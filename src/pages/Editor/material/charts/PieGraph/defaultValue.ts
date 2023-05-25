import type {ElementType} from '@/pages/Editor/Types';

const defaultValue:ElementType = {
  label: '饼状图',
  type: 'PieGraph',
  value:'PieGraph',
  id:'',
  icon:'icon-pie',
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
      title:'饼状图',
      chartType:'pie',
      legendVisible:false,
      legendX:'left',
      legendY:'top',
      dataTag:false,
      legendLayout:'horizontal'
    },
    datasource:[
      { 'name': '设备故障', 'value': 193 },
      { 'name': '设备离线 ', 'value': 0 },
      { 'name': '数值报警1', 'value': 65, },
      { 'name': '数值报警2', 'value': 55, },
      { 'name': '数值报警3', 'value': 75, },
      { 'name': '数值报警4', 'value': 95, },
      { 'name': '数值报警5', 'value': 65, },
      { 'name': '开关报警6', 'value': 78 }]
  },
}

export default defaultValue
