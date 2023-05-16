interface SelectOption{
  label:string;
  value:string
}
export interface Container {
  label: string;
  id: string;
  data?:object,
  children?: Container[];
}
export type Style = {
  display: 'block' | 'inline' | 'inline-block' | 'none' | string;
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string;
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | string;
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | string;
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' | string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  width: string | null;
  height: string | null;
  widthPrefix: 'px' | 'em' | '%' | string;
  heightPrefix: 'px' | 'em' | '%' | string;
};
export const style:Style = {
  display:'block',
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  flexWrap:'nowrap',
  marginTop:'10',
  marginBottom:'10',
  marginLeft:'10',
  marginRight:'10',
  paddingTop:'10',
  paddingBottom:'10',
  paddingLeft:'10',
  paddingRight:'10',
  width:null,
  height:null,
  widthPrefix:'px',
  heightPrefix:'px'
}
export const displayOptions:SelectOption[] = [
  {
    label:'弹性布局',
    value:'flex'
  },
  {
    label:'块级布局',
    value:'block'
  },
  {
    label:'行内块级布局',
    value:'inline-block'
  },
  {
    label:'隐藏',
    value:'none'
  },
]
export const flexDirectionOptions:SelectOption[] = [
  {
    label:'水平靠左',
    value:'row'
  },
  {
    label:'水平靠右',
    value:'row-reverse'
  },
  {
    label:'垂直靠上',
    value:'column'
  },
  {
    label:'垂直靠下',
    value:'column-reverse'
  },
]
export const justifyContentOptions:SelectOption[] = [
  {
    label:'正向',
    value:'flex-start'
  },
  {
    label:'逆向',
    value:'flex-end'
  },
  {
    label:'两端对齐',
    value:'space-between'
  },
  {
    label:'水平靠下',
    value:'space-around'
  },
]
export const alignItemOptions:SelectOption[] = [
  {
    label:'起点对齐',
    value:'flex-start'
  },
  {
    label:'终点对齐',
    value:'flex-end'
  },
  {
    label:'水平居中',
    value:'center'
  },
  {
    label:'基线对齐',
    value:'baseline'
  },
  {
    label:'填充',
    value:'stretch'
  },
]
export const flexWrapOptions:SelectOption[] = [
  {
    label:'不换行',
    value:'nowrap'
  },
  {
    label:'正换行',
    value:'wrap'
  },
  {
    label:'逆换行',
    value:'wrap-reverse'
  },
]
export const valueSettingOptions:SelectOption[] = [
  {
    label:'px',
    value:'px'
  },
  {
    label:'%',
    value:'%'
  },
]
