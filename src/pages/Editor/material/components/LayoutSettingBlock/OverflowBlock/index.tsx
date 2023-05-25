import React, { useContext, useEffect, useState } from 'react';
import '../style.less';
import { Select,} from 'antd';
import { TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import { overflowOptions,} from '../params';
import { StoreContext } from '@/pages/Editor/store';

interface LayoutSettingBlockProps {
  id?: string
}

const OverflowBlock: React.FC<LayoutSettingBlockProps> = ({ id }) => {
  const { state, dispatch } = useContext(StoreContext);
  //若有ID则采用当前ID对应数据，反之采用targetId
  const currentTargetId = id || state.renderTree.targetElementCheckedKey;
  // @ts-ignore
  const currentElement = findContainerById(currentTargetId, state.renderTree.schema)?.element?.data?.style || {};
  const [defaultValue, setDefaultValue] = useState<any>(currentElement);

  useEffect(() => {
    //@ts-ignore
    const elementData = findContainerById(currentTargetId, state.renderTree.schema)?.element?.data?.style || {};
    setDefaultValue(elementData);
  }, [currentTargetId]);

  const setSchemaData = (e: string, type: keyof typeof defaultValue) => {
    let props = { ...defaultValue };
    props[type] = e;
    setDefaultValue(props);
    dispatch({ type: TYPES.RENDER_TREE_UPDATE_ELEMENT_DATA_BY_ID, id: currentTargetId, data: { style: props } });
  };

  return <div className='layout-setting-block'>
    <div className='height-width-group'>
      <div className='layout-select-block-item'>
        <div className='label'>水平滚动</div>
        <div className='content'>
          <Select
            className='select'
            value={defaultValue.overflowX}
            placeholder='请选择水平滚动方式'
            options={overflowOptions}
            onChange={(e) => setSchemaData(e, 'overflowX')} />
        </div>
      </div>
      <div className='layout-select-block-item'>
        <div className='label'>垂直滚动</div>
        <div className='content'>
          <Select
            className='select'
            value={defaultValue.overflowY}
            placeholder='请选择垂直滚动方式'
            options={overflowOptions}
            onChange={(e) => setSchemaData(e, 'overflowY')} />
        </div>
      </div>
    </div>
  </div>;
};

export default OverflowBlock;
