import React,{useState,useContext} from 'react';
// import DraggableAndDroppable from '@/pages/Editor/container/BasicContainer'
import Page from '@/pages/Editor/material/Page'
import {createUUID} from '@/pages/utils';
import {StoreContext} from '@/pages/Editor/store'
import './style.less'

export default   () => {
  const context = useContext(StoreContext)
  console.log(context.state.renderTree.schema)
  const [items, setItems] = useState<any>([

  ]);

  const moveItem = (item:any, dropId:number|string) => {
    console.log(item,'inner')
    const {type,id} = item
    const dragId = id
    const dragIndex = items.findIndex((item: { id: string | number; }) => item.id === dragId);
    const dropIndex = items.findIndex((item: { id: string | number; }) => item.id === dropId);
    if(type==='wrapper'){//同为容器则占用位置，drop后移动
      setTimeout(()=>{
        const newItems = [...items];
        const id:string = createUUID()
        newItems.splice(dropIndex, 0, {id,content:`Item ${id}`});
        setItems(newItems)
      })
    }else if (dragIndex !== -1 && dropIndex !== -1) {//在上层容器则底部加一
      const newItems = [...items];
      const draggedItem = newItems.splice(dragIndex, 1)[0];
      newItems.splice(dropIndex, 0, draggedItem);
      setItems(newItems);
    }
  };
  const addElement = (item:any,)=>{
    const {type} = item

    if (type === 'wrapper') {
      const id:string = createUUID()
      setItems([...items,{id,content:null}])
      console.log(item,'wrapper')
    }

  }

  // const renderTree = (item:any)=>{
  //   // console.log(item.id)
  //   return <DraggableAndDroppable id={item.id} type={'BOX'} onMove={()=>{}}>
  //     {item.id}
  //     {item?.children?.map((dom:any)=>renderTree(dom))}
  //   </DraggableAndDroppable>
  // }
  // console.log(renderTree(context.state.renderTree.schema))
  // const renderTreeDom = renderTree(context.state.renderTree.schema)
  // // return renderTreeDom

  return (
    <Page className={'preview-body'}>
      {/*{items.map((item: { id: number|string; content: React.ReactNode[] | undefined; }) => (*/}
      {/*  <Page key={item.id} id={item.id} type={'BOX'} onMove={moveItem}>*/}
      {/*    {item.content}*/}
      {/*  </Page>*/}
      {/*))}*/}
      {/*{renderTreeDom}*/}
    </Page>
  );
};
