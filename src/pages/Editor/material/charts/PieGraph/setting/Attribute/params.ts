import { CheckBoxOptionType, SelectOptionType } from '@/pages/Editor/Types';
export type AttributeType = {
  title:string,
  chartType:null|'clustered'|'stacked'|'percentStacked',
  chartDisplayMode:'x'|'y',
  offsetXTitle:string,
  offsetYTitle:string,
  legendVisible:boolean,
  legendX:'left'|'center'|'right',
  legendY:'top'|'center'|'bottom',
  gridVisible:['x']|['y']|['x','y']|[],
  gridXLineStyleType:'solid'|'dashed',
  gridXLineStyleColor:string,
  gridYLineStyleType:'solid'|'dashed',
  gridYLineStyleColor:string,
  dataTag:boolean,
  legendLayout:'horizontal'|'vertical'|undefined|null
}
export const chartTypeOptions:SelectOptionType[] = [
  {value:'clustered',label:'簇状柱形图'},
  {value:'stacked',label:'堆积柱形图'},
  {value:'percentStacked',label:'百分比堆积柱形图'},
]
export const chartDisplayModeOptions:SelectOptionType[] = [
  {value:'x',label:'水平'},
  {value:'y',label:'垂直'},
]
export const legendXOptions:SelectOptionType[] = [
  {value:'left',label:'左侧'},
  {value:'center',label:'居中'},
  {value:'right',label:'右侧'},
]
export const legendYOptions:SelectOptionType[] = [
  {value:'top',label:'顶部'},
  {value:'center',label:'水平'},
  {value:'bottom',label:'底部'},
]
export const lineStyleTypeOptions:SelectOptionType[] = [
  {value:'solid',label:'实线'},
  {value:'dashed',label:'虚线'},
]

export const gridReviewOptions:CheckBoxOptionType[] = [
  {value:'x',label:'水平'},
  {value:'y',label:'垂直'},
]
export const legendLayoutOptions:SelectOptionType[] = [
  {value:'horizontal',label:'水平排列'},
  {value:'vertical',label:'竖直排列'},
]
