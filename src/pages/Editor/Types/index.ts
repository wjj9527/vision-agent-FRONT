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
};

export type ElementType = {
  label:string,
  type:string|undefined|null,
  value:string,
  id:string,
  data:{
    style?:StyleType,
    data?:any,
    attr?:any,
  }
}
