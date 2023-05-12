import {plugin,pluginType,pluginItemType} from '@/pages/Editor/material';
import { Input, Card } from 'antd';
const { Search } = Input;
import Item from './Item';
import { useState } from 'react';

export default () => {
  const [configState,setConfigState] = useState(plugin)
  const handleOnSearch = (text:string)=>{
    const configList = JSON.parse(JSON.stringify(plugin))

    let stateList:pluginType[] = []
    configList.forEach((item:pluginType)=>{
      const blockItems = item.items.filter((i: pluginItemType)=>{
        return i.label.includes(text)||i.searchEKEY.toUpperCase().includes(text.toUpperCase())
      })
      item.items = blockItems
      // @ts-ignore
      !!blockItems.length&&stateList.push(item)
    })
    // @ts-ignore
    setConfigState(stateList)
  }
  return <div className='drawer-container-box'>
    <div className='search-handle'>
      <Search onSearch={handleOnSearch} allowClear/>
    </div>
    <div className='plugin-scroll-container'>
      {
        configState.map(item => <Card title={item.label} key={item.value}>
          <div className='drawer-card-container'>
            {
              //@ts-ignore
              item?.items.map(i => <Item className='drawer-label-item' {...i} key={i.value}>
                  <div>
                    <div className='icon-box'>
                      <div className={`iconfont ${i.icon}`}>

                      </div>
                    </div>
                    <div className='label'>{i.label}</div>
                  </div>
                </Item>
              )
            }
          </div>
        </Card>)
      }
    </div>
  </div>;
}
