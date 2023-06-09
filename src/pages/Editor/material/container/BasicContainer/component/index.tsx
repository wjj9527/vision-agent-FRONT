import React, { ReactNode,} from 'react';
import './style.less'
import ElementBody from '@/pages/Editor/material/components/ElementBody';
interface DataType {
  style?:object
}
interface DraggableAndDroppableProps {
  id: number | string ,
  children?: ReactNode[],
  type: string,
  label:string,
  onMove?: Function | null | undefined,
  className?: string,
  data:DataType
}

const emptyFill =<div className='empty-fill'>
  拖拽组件或容器到这里
</div>

const BasicContainer:React.FC<DraggableAndDroppableProps> = (props) => {
  const {id,children,data,label} = props
  const {style} = data

  const classNameList = {
    'basic-container':true,
  }
  return (
    <ElementBody className={classNameList} style={style} id={id} label={label} type={'BasicContainer'}  handleActions={['update','insert','copy','delete']}>
      {/*@ts-ignore*/}
      {children?.props?.children?.length?children:emptyFill}
    </ElementBody>

  );
}

export default BasicContainer;
