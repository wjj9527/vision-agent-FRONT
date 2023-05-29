import React from 'react';
import { DatePicker ,Select,Input,Button,Form} from 'antd';
const { RangePicker } = DatePicker;
import './style.less';
import axios from 'axios'

const SearchHandle: React.FC = () => {
  const [form] = Form.useForm()
  const handleDatePickerChange =(d:any,v:any)=>{
    console.log(d,v)
  }
  const onReset = () => {
    form.resetFields()
    // @ts-ignore
    console.log(form.getFieldValue())
    axios({
      method:'get',
      url:'/api/material/alarmTable/getAlarmList'
    }).then(res=>{
      console.log(res)
    })
  }
  const onSubmit =(v:any)=>{
    console.log(v)
  }
  return <div className='search-handle'>
    <Form layout="inline" form={form} onFinish={onSubmit}
    >
      <Form.Item label="日期" name="date">
        {/*@ts-ignore*/}
        <RangePicker/>
      </Form.Item>
      <Form.Item label="报警类型" name="type">
        <Input placeholder="请输入报警类型" className="input-element" />
      </Form.Item>
      <Form.Item label="网关点位名" name="point">
        <Input placeholder="请输入网关点位名" className="input-element" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="btn" htmlType="submit" onClick={onSubmit}>搜索</Button>
        <Button type="primary" ghost htmlType="button" onClick={onReset}>重置</Button>
      </Form.Item>
    </Form>
  </div>
};
export default SearchHandle;
