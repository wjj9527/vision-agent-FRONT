import './style.less'
import ComponentItems from './ComponentItems'
import Outline from './Outline'
import { useContext } from 'react';
import { StoreContext } from '@/pages/Editor/store';

export default ()=>{
  const { state } = useContext(StoreContext);
  return <div className="drawer-plugin-component-content">
    <div className='drawer-plugin-component-content-items-list'>
      {
        state?.plugin?.pluginCurrentTarget==='component'&&<ComponentItems/>
      }
      {
        state?.plugin?.pluginCurrentTarget==='outline'&&<Outline/>
      }
    </div>
  </div>
}
