import React from 'react';
import DefaultChartDataSetting from '@/pages/Editor/material/components/DefaultChartDataSetting';
interface IProps {
  id:string
}
const DataSetting:React.FC<IProps> = ({id})=>{
  return <>
    <DefaultChartDataSetting id={id}/>
  </>
}
export default DataSetting
