import React, { useContext } from 'react';
import { StoreContext } from '@/pages/Editor/store';
import ReactJson from 'react-json-view';

const SchemaPlugin:React.FC =()=>{
  const {state,dispatch} = useContext(StoreContext)
  const {schema} = state.renderTree
  //
  return <div className='drawer-container-box'>
    {/*@ts-ignore*/}
    <ReactJson src={schema}/>
  </div>
}
export default SchemaPlugin
