import './style.less'
import ComponentItems from './ComponentItems'
import Outline from './Outline'
import SchemaPlugin from './Schema';
import MenuManagement from './MenuManagement';
import { useContext, useEffect } from 'react';
import { StoreContext,TYPES } from '@/pages/Editor/store';
import { menuListGetting ,getPageSchema} from '@/http/api/editor';

export default ()=>{
  const { state,dispatch } = useContext(StoreContext);
  //设置页面列表
  useEffect(()=>{
    menuListGetting().then(res=>{
      const { data } = res;
      dispatch({type:TYPES.SETTING_PLUGIN_MENU_LIST,value:data})
      const getFirstPage = (data:any)=> {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item.type.toString() === '2') {
            return item;
          } else if (item.children && item.children.length > 0) {
            const result:any = getFirstPage(item.children);
            if (result) {
              return result;
            }
          }
        }
      }
      const firstPage = getFirstPage(data)
      dispatch({type:TYPES.SETTING_PLUGIN_PAGE_DEFAULT_DATA,value:getFirstPage(data)})

      getPageSchema({menuId:firstPage?.id}).then(res=>{
        if (res.data.schema) {
          console.log(JSON.parse(res.data.schema))
        }
      })

    })
  },[])

  //获取第一个页面的schema作为初始化数据

  return <div className="drawer-plugin-component-content">
    <div className='drawer-plugin-component-content-items-list'>
      {
        state?.plugin?.pluginCurrentTarget==='component'&&<ComponentItems/>
      }
      {
        state?.plugin?.pluginCurrentTarget==='outline'&&<Outline/>
      }
      {
        state?.plugin?.pluginCurrentTarget==='page'&&<MenuManagement/>
      }
      {
        state?.plugin?.pluginCurrentTarget==='json'&&<SchemaPlugin/>
      }
    </div>
  </div>
}
