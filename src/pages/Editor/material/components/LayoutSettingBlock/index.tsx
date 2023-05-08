import React from 'react';
import './style.less';
import {Select} from 'antd'
interface SelectOption{
  label:string;
  value:string
}
const displayOptions:SelectOption[] = [
  {
    label:'内联布局',
    value:'inline'
  },
  {
    label:'弹性布局',
    value:'flex'
  },
  {
    label:'块级布局',
    value:'block'
  },
  {
    label:'行内块级布局',
    value:'inline-block'
  },
  {
    label:'隐藏',
    value:'none'
  },
]

const flexDirectionOptions:SelectOption[] = [
  {
    label:'水平靠左',
    value:'row'
  },
  {
    label:'水平靠右',
    value:'row-reverse'
  },
  {
    label:'垂直靠上',
    value:'column'
  },
  {
    label:'水平靠下',
    value:'column-reverse'
  },
]

const justifyContentOptions:SelectOption[] = [
  {
    label:'正向',
    value:'flex-start'
  },
  {
    label:'逆向',
    value:'flex-end'
  },
  {
    label:'两端对齐',
    value:'space-between'
  },
  {
    label:'水平靠下',
    value:'space-around'
  },
]
const alignItemOptions:SelectOption[] = [
  {
    label:'起点对齐',
    value:'flex-start'
  },
  {
    label:'终点对齐',
    value:'flex-end'
  },
  {
    label:'水平居中',
    value:'center'
  },
  {
    label:'基线对齐',
    value:'baseline'
  },
  {
    label:'填充',
    value:'stretch'
  },
]

const flexWrapOptions:SelectOption[] = [
  {
    label:'不换行',
    value:'flex-start'
  },
  {
    label:'正换行',
    value:'wrap'
  },
  {
    label:'逆换行',
    value:'wrap-reverse'
  },
]
const LayoutSettingBlock: React.FC = () => {
  return <div className='layout-setting-block'>
    <div className='layout-select-block'>
      <div className='layout-select-block-item'>
        <div className='label'>布局模式</div>
        <div className='content'>
          <Select className="select" options={displayOptions} placeholder="选择布局模式"/>
        </div>
      </div>
      <div className='layout-select-block-item'>
        <div className='label'>主轴方向</div>
        <div className='content'>
          <Select className="select" options={flexDirectionOptions} placeholder="选择主轴方向"/>
        </div>
      </div>
      <div className='layout-select-block-item'>
        <div className='label'>主轴对齐</div>
        <div className='content'>
          <Select className="select" options={justifyContentOptions} placeholder="选择主轴对齐方式"/>
        </div>
      </div>
      <div className='layout-select-block-item'>
        <div className='label'>辅轴对齐</div>
        <div className='content'>
          <Select className="select" options={alignItemOptions} placeholder="选择辅轴对齐方式"/>
        </div>
      </div>
      <div className='layout-select-block-item'>
        <div className='label'>换行</div>
        <div className='content'>
          <Select className="select" options={flexWrapOptions} placeholder="选择换行方式"/>
        </div>
      </div>
    </div>
    <div className='distance-block'>
      <div className='margin-top-div layout-d-block'>
        <input type='text' className='d-input' value={100} />
      </div>
      <div className='margin-bottom-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
        <span className='text'>margin</span>
      </div>
      <div className='margin-left-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
      </div>
      <div className='margin-right-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
      </div>
      <div className='padding-top-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
      </div>
      <div className='padding-bottom-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
        <span className='text'>padding</span>
      </div>
      <div className='padding-left-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
      </div>
      <div className='padding-right-div layout-d-block'>
        <input type='text' className='d-input' value={1} />
      </div>
    </div>
  </div>;
};

export default LayoutSettingBlock;
