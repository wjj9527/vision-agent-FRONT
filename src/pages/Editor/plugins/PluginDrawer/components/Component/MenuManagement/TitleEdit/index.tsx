import React, { useEffect, useState } from 'react';
import { Button ,message} from 'antd';
import { updateMenuName } from '@/http/api/editor';
interface IProps {
  id:string|number,
  label:string,
  type:string|number
}
type HandleInputType = (event: React.FormEvent<HTMLInputElement>) => void;
const TitleEdit:React.FC<IProps>=({id,label,type})=>{
  const [labelText,setLabelText] = useState<string>('')
  const [editStatus,setEditStatus] = useState(false)
  useEffect(()=>{
    setLabelText(label)
  },[label])
  const handleInput:HandleInputType = (e)=>{
    //@ts-ignore
    setLabelText(e.target?.value)
  }

  const submitTitleData = ()=>{
    updateMenuName({type,title:labelText,id}).then(res=>{
      message.success("修改成功")
    }).finally(()=>{
      setEditStatus(false)
    })
  }
  return <div className="title-edit">
    <i className={`iconfont ${Number(type) === 1?'icon-caidan':'icon-yemian'} `}/>
    {
      editStatus?(<input type='text' onBlur={submitTitleData} maxLength={8} className="title-edit-input" value={labelText} onInput={handleInput}/>):(<span className="title-text" >{labelText}</span>)
    }
    {
      !editStatus?(<i className='iconfont icon-editor label-edit' onClick={setEditStatus.bind(this,true)}/>):(<Button type="link" className="edit-btn" size='small'>修改</Button>)
    }

  </div>
}

export default TitleEdit
