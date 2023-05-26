import React, { useContext } from 'react';
import './style.less';
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { Button, message } from 'antd';
import { updateCurrentTargetSchema } from '@/http/api/editor';
import { useHistory } from 'react-router-dom';

const TopBtnGroup: React.FC = () => {
  const { state, dispatch } = useContext(StoreContext);
  const history = useHistory()
  const schema = state.renderTree.schema;
  const pluginPageDefaultData = state.plugin.pluginPageDefaultData;
  const foldStatus = state.plugin.pluginSettingFold;
  const btnIcon = foldStatus ? <i className='iconfont icon-zhedie-zhankai' /> :
    <i className='iconfont icon-zhedie-shouqi' />;
  const handleSaveSchema = () => {
    const schemaStr = JSON.stringify(schema);
    const { id } = pluginPageDefaultData;
    updateCurrentTargetSchema({ schema: schemaStr, menuId: id }).then(() => {
      message.success('保存成功');
    });
  };
  const redirectToPreview =()=>{
    history.push(`/preview/${pluginPageDefaultData.id}`)
  }
  return <div className='top-btn-group'>
    <Button type='primary' onClick={redirectToPreview} style={{ marginRight: 8 }} ghost>预览</Button>

    <Button type='primary' onClick={handleSaveSchema}>保存</Button>
    <div className='fold-btn'
         onClick={dispatch.bind(this, { type: TYPES.UPDATE_PLUGIN_SETTING_FOLD, value: !foldStatus })}>
      {btnIcon}
    </div>
  </div>;
};
export default TopBtnGroup;
