import {plugin} from '@/pages/Editor/material';
import { Input, Card } from 'antd';
const { Search } = Input;
import Item from './Item';
import { useState } from 'react';

export default () => {
  const [configState,setConfigState] = useState(plugin)
  const handleOnSearch = (text:string)=>{
    const configList = JSON.parse(JSON.stringify(plugin))

    let stateList: { label: string; value: string; items: { label: string; value: string; searchEKEY: string; icon: string; }[]; }[] = []
    configList.forEach((item: { items: any; label?: string; value?: string; })=>{
      const blockItems = item.items.filter((i: { label: string | string[]; searchEKEY: string; })=>{
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
            {
              item?.items.map(i => <Item className='drawer-label-item' {...i} key={i.value}>
                  <div>
                    <div className='icon-box'>
                      <div className={`iconfont ${i.icon}`}>

                      </div>
                    </div>
                    <div className='label'>{i.label}</div>
                  </div>
                </Item>,
              )
            }
          </div>
        </Card>)
      }
    </div>
  </div>;
}
