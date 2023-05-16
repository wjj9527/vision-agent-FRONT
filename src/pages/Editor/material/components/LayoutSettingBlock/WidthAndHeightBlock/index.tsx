import React, { useContext, useEffect, useState } from 'react';
import '../style.less';
import { Select, InputNumber } from 'antd';
import { TYPES } from '@/pages/Editor/store';
import { findContainerById } from '@/pages/utils/findContainerById';
import { valueSettingOptions,Style } from '../params';
import { StoreContext } from '@/pages/Editor/store';

interface LayoutSettingBlockProps {
  id?: string
}

const WidthAndHeightBlock: React.FC<LayoutSettingBlockProps> = ({ id }) => {
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
      <div className='line-block-item'>
        <div className='label'>宽度</div>
        <div className='content'>
          <InputNumber
            value={defaultValue.width} className='input-number' placeholder='auto'
            onInput={(e) => setSchemaData(e, 'width')} />
        </div>
        <div className='select'>
          <Select className='select'
                  value={defaultValue.widthPrefix}
                  options={valueSettingOptions}
                  onChange={(e) => setSchemaData(e, 'widthPrefix')} />
        </div>
      </div>
      <div className='line-block-item'>
        <div className='label'>高度</div>
        <div className='content'>
          <InputNumber value={defaultValue.height} className='input-number' placeholder='auto'
                       onInput={(e) => setSchemaData(e, 'height')} />
        </div>
        <div className='select'>
          <Select className='select' value={defaultValue.heightPrefix}
                  options={valueSettingOptions}
                  onChange={(e) => setSchemaData(e, 'heightPrefix')} />
        </div>
      </div>
    </div>
  </div>;
};

export default WidthAndHeightBlock;
