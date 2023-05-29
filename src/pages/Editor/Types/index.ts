export type StyleType = {
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
  overflowX?:'auto'|'hidden'|'scroll'|string;
  overflowY?:'auto'|'hidden'|'scroll'|string;
  flexGrow?:'0'|'1'
};
//外框参数类型
export type ElementType = {
  label:string,
  type:string|undefined|null,
  value:string,
  id:string,
  icon?:string,
  data:{
    style?:StyleType,
    data?:any,
    attribute?:any,
    datasource?:any,
    onlineXHR?:{
      [key:string]:{
        isInline?:false,
        url?:string|null
      }
    }
  },
}
//antd select options
export type SelectOptionType = {
  value:string|null|number,
  label:string|null|number
}
export type CheckBoxOptionType = {
  value:string|number,
  label:string
}
