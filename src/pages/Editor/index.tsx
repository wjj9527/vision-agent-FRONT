import './style.less';
import LeftBar from './plugins/LeftBar';
import PluginDrawer from './plugins/PluginDrawer';
import PreviewBody from './PreviewBody';
import SettingContainer from '@/pages/Editor/plugins/Setting';
import TopBtnGroup from '@/pages/Editor/plugins/TopBtnGroup';
import ElementSelection from '@/pages/Editor/material/drawer/ElementSelection'
import { Store,} from './store';
import { DndProvider,} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default () => {
  return (
    <Store>
      <DndProvider backend={HTML5Backend}>
        <div className='page-wrapper editor-content'>
          {/*头部控制栏*/}
          <div className='top-bar'>
            <TopBtnGroup />
          </div>
          <div className='editor-container-inner'>
            {/*左侧插件栏*/}
            <div className='plugin-bar'>
              <LeftBar />
            </div>
            <div className='plugin-drawer'>
              <PluginDrawer />
            </div>
            {/*页面主体*/}
            <div className='page-render-content'>
              <PreviewBody />
            </div>
            {/*组件以及容器setting*/}
            <div className='setting-content'>
              <SettingContainer />
            </div>
            <ElementSelection/>
          </div>
        </div>
      </DndProvider>
    </Store>

  );
}
