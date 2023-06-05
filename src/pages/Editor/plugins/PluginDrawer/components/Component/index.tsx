import './style.less'
import ComponentItems from './ComponentItems'
import Outline from './Outline'
import SchemaPlugin from './Schema';
import MenuManagement from './MenuManagement';
import Group from './Group'
import { useContext,  } from 'react';
import { StoreContext, } from '@/pages/Editor/store';

export default ()=>{
  const { state,} = useContext(StoreContext);
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
      {
        state?.plugin?.pluginCurrentTarget==='group'&&<Group/>
      }
    </div>
  </div>
}
