import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import * as echarts from 'echarts';
import './style.less';
import { AttributeType, } from '@/pages/Editor/material/charts/LineGraph/setting/Attribute/params';
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

const BarGraph: React.FC<ElementProps> = ({ id, label, data }) => {
  const chartRef = useRef(null);
  let chart:any = null
  const { style, attribute,datasource } = data;
  const chartSettingAction = () => {
    const dataSource = JSON.parse(JSON.stringify(datasource))
    if (!chartRef.current) {
      return
    }
    const {
      chartType,
      chartDisplayMode,
      legendVisible,
      legendX,
      legendY,
      legendLayout,
      offsetXTitle,
      offsetYTitle,
      gridVisible,
      gridXLineStyleColor,
      gridYLineStyleColor,
      gridYLineStyleType,
      gridXLineStyleType,
      dataTag,
      title
    } = attribute;
    // 设置可视块类型

    let titleObj = {
      text:title
    }
    let yAxis = {
      type: 'value',
      name: offsetYTitle,
      axisLabel: {
        formatter:'{value}'
      },
      splitLine: {
        // @ts-ignore
        show: gridVisible.includes('x'),
        lineStyle: {
          color: gridYLineStyleColor,
          type: gridYLineStyleType,
        },
      },
    };
    let tooltip = {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
    }
    let xAxis = {
      type: 'category',// y轴类型为数值型
      name: offsetXTitle,

      //@ts-ignore
      data: dataSource?.data||null,
      splitLine: {
        // @ts-ignore
        show: gridVisible.includes('y'),
        lineStyle: {
          color: gridXLineStyleColor,
          type: gridXLineStyleType,
        },
      },
    };
    //图例
    let legend = {
      show: legendVisible,
      orient: legendLayout,
      left: legendX,
      top: legendY,
    };

    let series = dataSource?.series?.map((item:any)=>{
      const type = 'line'
      const label = {show:dataTag}
      Object.assign(item,{type,label,})
      if (chartType === 'areaLine') {
        Object.assign(item,{areaStyle:{}})
      }
      return item
    })
    if (chart) {
      chart.dispose()
    }
    chart = echarts.init(chartRef.current);

    chart.setOption({
      yAxis,
      xAxis,
      legend,
      tooltip,
      title:titleObj,
      series
    },true);
  };
  useEffect(() => {
    chartSettingAction();
  }, [attribute,datasource]);

  return <ElementBody className={{'chart-wrapper':true}}  id={id} label={label} style={style}>
    <div className='chart-container' ref={chartRef}/>
  </ElementBody>;
};
export default BarGraph;
