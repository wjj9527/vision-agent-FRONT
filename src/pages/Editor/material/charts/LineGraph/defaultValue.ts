import type {ElementType} from '@/pages/Editor/Types';

const defaultValue:ElementType = {
  label: '折线图',
  type: 'LineGraph',
  value:'LineGraph',
  id:'',
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
      title:'折线图',
      chartType:'line',
      chartDisplayMode:'y',
      offsetXTitle:'x',
      offsetYTitle:'y',
      legendVisible:false,
      legendX:'left',
      legendY:'top',
      gridVisible:[],
      gridXLineStyleType:'solid',
      gridXLineStyleColor:'#dddddd',
      gridYLineStyleType:'solid',
      gridYLineStyleColor:'#dddddd',
      dataTag:false,
      legendLayout:'horizontal'
    },
    datasource:{ 'data': ['空调机组', '照明', '水表', '风机', '水泵', '电梯',"电表"],"series":[{"name":"在线数","data":[8,6,3,7,5,4,0]},{"name":"离线数","data":[1,0,0,0,0,0,3]}]}
  },
}

export default defaultValue
