import type {ElementType} from '@/pages/Editor/Types';
const defaultValue:ElementType = {
  label: '子容器',
  type: 'container',
  value:'BasicContainer',
  id:'',
  icon:'icon-m-lierongqi',
  data: {
    style: {
      display: 'block',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
      marginTop: '10',
      marginBottom: '10',
      marginLeft: '10',
      marginRight: '10',
      paddingTop: '10',
      paddingBottom: '10',
      paddingLeft: '10',
      paddingRight: '10',
      width: null,
      height: null,
      widthPrefix: 'px',
      heightPrefix: 'px',
      overflowX:'auto',
      overflowY:'auto',
      flex:'0 1 auto',
    },
  },
}

export default defaultValue
