import React, { ReactNode, useContext } from 'react';
import './style.less'


import ElementBody from '@/pages/Editor/material/components/ElementBody';
interface DataType {
  style:object
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

const EmptyFill =()=>{
  return <div className='empty-fill'>
    拖拽组件或容器到这里
  </div>
}



const BasicContainer:React.FC<DraggableAndDroppableProps> = (props) => {
  const {id,children,data,label} = props
  const {style} = data

  const classNameList = {
    'basic-container':true,
  }
  console.log(children)

  return (
    <ElementBody className={classNameList} style={style} id={id} label={label} type={'BasicContainer'}  handleActions={['insert','copy','delete']}>
      {/*@ts-ignore*/}
      {children.props.children?.length?children:<EmptyFill/>}
    </ElementBody>

  );
}

export default BasicContainer;
