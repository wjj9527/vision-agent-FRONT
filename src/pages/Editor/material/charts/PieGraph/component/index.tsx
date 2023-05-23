import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import * as echarts from 'echarts';
import './style.less';
import { AttributeType, } from '@/pages/Editor/material/charts/BarGraph/setting/Attribute/params';
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
  attribute: AttributeType
}

const BarGraph: React.FC<ElementProps> = ({ id, label, data }) => {
  const chartRef = useRef(null);
  let chart:any = null
  const { style, attribute } = data;
  const [dataSource,setDataSource] = useState({})
  const getChartsBarMockDataGetting = ()=>{
    const data = { 'data': ['空调机组', '照明', '水表', '风机', '水泵', '电梯',"电表"],"series":[{"name":"在线数","data":[8,6,3,7,5,4,0]},{"name":"离线数","data":[1,0,0,0,0,0,3]}]}
    setTimeout(()=>{
      setDataSource({
        categoryData : data.data,
        series:data.series
      })
    },100)
  }
  const chartSettingAction = () => {
    // console.log(dataSource)
    const dataSource = { 'data': ['空调机组', '照明', '水表', '风机', '水泵', '电梯',"电表"],"series":[{"name":"在线数","data":[8,6,3,7,5,4,0]},{"name":"离线数","data":[1,0,0,0,0,0,3]}]}
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
        formatter:chartType==='percentStacked'? '{value}%':'{value}'
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
    if (chartDisplayMode === 'x') {
      // @ts-ignore
      [yAxis, xAxis] = [xAxis, yAxis];
    }
    let series:any = []
    //簇状柱形图

    if (chartType === 'clustered') {

      //@ts-ignore
      series = dataSource?.series?.map(item=>{
        const type = 'bar'
        const label = {show:dataTag}
        Object.assign(item,{type,label,})
        return item
      })
      // console.log(series)
    } else if (chartType === 'stacked') {//堆积柱形图

      //@ts-ignore
      series = dataSource?.series?.map(item=>{
        const type = 'bar'
        const label = {show:dataTag}
        const stack = '总量'
        Object.assign(item,{type,label,stack})
        return item
      })
    }else if (chartType === 'percentStacked') {
      const dataList = JSON.parse(JSON.stringify(dataSource))
      // console.log(dataList)
      //@ts-ignore
      const seriesList = dataList?.series?.map(item=>item.data)
      //@ts-ignore
      let seriesTotalList = []
      for(let i=0;i<seriesList.length;i++){
        // seriesList.
        const data = seriesList[i]
        if (seriesList[i]) {
          data.forEach((n:any,i:any)=>{
            //@ts-ignore
            if (seriesTotalList[i]) {
              //@ts-ignore
              seriesTotalList[i] = seriesTotalList[i]+n
            }else{
              seriesTotalList[i] = n
            }
          })
        }
      }
      //@ts-ignore
      const percentSeries = dataSource?.series?.map(item=>{
        const {data} = item
        const row = data.map((v:any,index:any)=>{
          //@ts-ignore
          return Number(((v/seriesTotalList[index])*100).toFixed(1))
        })
        Object.assign(item,{data:row})
        return item
      })
      series = percentSeries?.map((item:any)=>{
        const type = 'bar'
        const label = {show:dataTag}
        const stack = '总量'
        Object.assign(item,{type,label,stack})
        return item
      })
    }
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
    // setRefresh(true)
  };
  useEffect(() => {
    chartSettingAction();
  }, [attribute,]);
  useEffect(()=>{
    getChartsBarMockDataGetting()
  },[])

  return <ElementBody id={id} label={label} style={style}>
    <div className='chart-wrapper'>
      <div className='chart-container' ref={chartRef}/>
    </div>
  </ElementBody>;
};
export default BarGraph;
