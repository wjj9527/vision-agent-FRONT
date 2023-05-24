import React, { ReactNode, useEffect, useRef, } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import * as echarts from 'echarts';
import './style.less';
import { AttributeType } from '@/pages/Editor/material/charts/PieGraph/setting/Attribute/params';

interface ElementProps {
  id: number | string,
  children?: ReactNode[],
  type: string,
  label: string,
  onMove?: Function | null | undefined,
  className?: string,
  data: DataType
}

interface DataType {
  style: object,
  attribute: AttributeType,
  datasource:any
}

const PieGraph: React.FC<ElementProps> = ({ id, label, data }) => {
  const chartRef = useRef(null);
  const { style, attribute,datasource } = data;
  const series = JSON.parse(JSON.stringify(datasource));
  let resizeFn:any = null
  const chartSettingAction = () => {
    if (!chartRef.current) {
      return;
    }
    const { chartType, dataTag, legendLayout, legendVisible, legendX, legendY, title } = attribute;
    const chart = echarts.init(chartRef.current);
    let data
    if(chartType==='rosePie'){
      const source = [...series]
      source.sort((a,b)=>a.value-b.value)
      data = source
    }else{
      data = series
    }
    let titleObj = {
      text:title
    }
    let legend = {
      show: legendVisible,
      orient: legendLayout,
      left: legendX,
      top: legendY,
    };
    chart.setOption({
      title:titleObj,
      legend,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: '访问来源',
          roseType: chartType==='rosePie'?'radius':'',
          label: {
            show: dataTag,
            position: 'outside',
            formatter: '{b}: {c} ({d}%)',
          },
          type: 'pie',
          radius: chartType==="doughnutPoe"?['30%','60%']:'60%',
          data,
        },
      ],
    },true);
    resizeFn = ()=>{
      chart.resize()
    }
    window.addEventListener('resize', resizeFn);
  };
  useEffect(() => {
    chartSettingAction();
    return ()=>{
      window.removeEventListener('resize', resizeFn);
    }
  }, [attribute]);
  return <ElementBody className={{'chart-wrapper':true}} id={id} label={label} style={style}>
    <div className='chart-container' ref={chartRef}/>
  </ElementBody>;
};
export default PieGraph;
