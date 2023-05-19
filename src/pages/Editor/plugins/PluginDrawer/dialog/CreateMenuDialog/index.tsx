import React, { useContext, useEffect, useState } from 'react';
import {Modal,Form,Input,Select,message} from 'antd'
import { StoreContext, TYPES } from '@/pages/Editor/store';
import { createMenuItemAction } from '@/http/api/editor';
const options = [
  {
    value:2,
    label:'页面'
  },
  {
    value:1,
    label:'菜单'
  },
]
interface CreateMenuDialogProps {
  onFresh?:Function
}
const CreateMenuDialog:React.FC<CreateMenuDialogProps>=({onFresh})=>{
  const {state,dispatch} = useContext(StoreContext)
  const visible = state.plugin.pluginDialogCreateMenuVisible
  const defaultValue = state.plugin.pluginCreateMenuDefaultValue
  const [typeSelectDisabled,setTypeSelectDisabled] = useState(false)
  const [form] = Form.useForm()
  const handleCancel = ()=>{
    dispatch({type:TYPES.UPDATE_PLUGIN_DIALOG_CREATE_MENU_VISIBLE_STATUS,value:false})
    form.resetFields();
  }
  const handleConfirm = ()=>{
    form.submit()
  }
  const onFinish = (values: any) => {
    const {parentId} = defaultValue
    createMenuItemAction({...values,parentId}).then(res=>{
      message.success("创建成功")
      if (onFresh) {
        onFresh()
      }
      handleCancel()
    })

  };
  useEffect(()=>{
    if (visible) {
      form.setFieldsValue({...defaultValue})
      setTypeSelectDisabled(!!defaultValue.type)
    }
  },[visible])
  return <Modal title="新增菜单/页面" open={visible} okText="确定" cancelText="取消" onOk={handleConfirm} onCancel={handleCancel}>
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="创建类型"
        name="type"
        rules={[{ required: true, message: '请选择创建类型' }]}
      >
        <Select
          disabled={typeSelectDisabled}
          options={options}
          placeholder="请选择创建类型"/>
      </Form.Item>

      <Form.Item
        label="菜单/页面名称"
        name="title"
        rules={[{ required: true, message: '请输入菜单/页面名称' }]}
      >
        <Input placeholder="请输入菜单/页面名称"/>
      </Form.Item>

    </Form>
  </Modal>
}
export default CreateMenuDialog
