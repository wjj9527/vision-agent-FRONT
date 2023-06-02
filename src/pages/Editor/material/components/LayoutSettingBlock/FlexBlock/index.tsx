import React, { useContext, useEffect, useState } from 'react';
import '../style.less';
import { Select,} from 'antd';
import { TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import { flexOptions,} from '../params';
import { StoreContext } from '@/pages/Editor/store';

interface LayoutSettingBlockProps {
  id?: string
}

const OverflowBlock: React.FC<LayoutSettingBlockProps> = ({ id }) => {
  const { state, dispatch } = useContext(StoreContext);
  //若有ID则采用当前ID对应数据，反之采用targetId
  const currentTargetId = id || state.renderTree.targetElementCheckedKey;

  const {element,parent} = findContainerById(currentTargetId, state.renderTree.schema)
  // @ts-ignore
  const parentElementDisplayFlexStatus = parent?.data.style?.display === 'flex'
  const currentElement = element?.data?.style || {};
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

  return parentElementDisplayFlexStatus?<div className='layout-setting-block'>
    <div className='height-width-group'>
      <div className='layout-select-block-item'>
        <div className='label'>剩余填充</div>
        <div className='content'>
          <Select
            className='select'
            value={defaultValue.flex}
            placeholder='请选择水平滚动方式'
            options={flexOptions}
            onChange={(e) => setSchemaData(e, 'flex')} />
        </div>
      </div>
    </div>
  </div>:<></>;
};

export default OverflowBlock;
