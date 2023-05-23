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
      chartType:'clustered',
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
    }
  },
}

export default defaultValue
