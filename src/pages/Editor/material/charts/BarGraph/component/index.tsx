import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import * as echarts from 'echarts';

import './style.less'
interface ElementProps {
  id: number | string ,
  children?: ReactNode[],
  type: string,
  label:string,
  onMove?: Function | null | undefined,
  className?: string,
  data:DataType
}
interface DataType {
  style:object
}
const CardGroup:React.FC<ElementProps> = (props)=>{
  const {id,label} = props
  const chartRef = useRef(null)
  const data = [
    { name: 'A', value: 100 },
    { name: 'B', value: 20 },
    { name: 'A', value: 100 },
  ];
  useEffect(()=>{
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption({
        xAxis: {
          type: 'value',
          data: data.map((item) => item.name),
        },
        yAxis: {
          type: 'category',
        },
        series: [
          {
            data: data.map((item) => item.value),
            type: 'bar',
          },
        ],
      });
    }
  },[])
  return <ElementBody id={id} label={label}>
    <div className="chart-wrapper">
      <div className='chart-container' ref={chartRef}/>
    </div>
  </ElementBody>



}
export default CardGroup
