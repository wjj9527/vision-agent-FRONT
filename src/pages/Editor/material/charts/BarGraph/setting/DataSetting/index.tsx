import React from 'react';
import DefaultDataSetting from '@/pages/Editor/material/components/DefaultDataSetting';

interface IProps {
  id:string
}
const DataSetting:React.FC<IProps> = ({id})=>{
  return <>
    <DefaultDataSetting id={id}/>
  </>
}
export default DataSetting
