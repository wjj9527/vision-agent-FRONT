import Axios, { AxiosRequestConfig } from 'axios'
import {message} from 'antd'
import axiosRetry from 'axios-retry'

const client = Axios.create({
  baseURL:'http://192.168.2.176:8009/',
  timeout:50000
})
//失败重新请求
axiosRetry(client, { retries: 3 })

export async function request(config:AxiosRequestConfig) {
  try {
    const response = await client.request(config)
    const {data} = response
    if (data.success !== 1) {
      message.error(data.message)
      return Promise.reject(response)
    }
    return data
  }catch (err:any){
    const response = err?.response
    message.error('网络错误')
    return Promise.reject(response)
  }

}

export const $get =(url:string,data?:any,config?:AxiosRequestConfig)=>{
  const method = 'GET'
  const headers = {
    "Content-Type": "application/json",
  }||config?.headers
  const responseType= "json"||config?.responseType
  const params = data
  const axiosConfig = {...config}
  Object.assign(axiosConfig,{url,method,headers,responseType,params})
  return request(axiosConfig)
}

export const $delete = (url:string,data?:any,config?:AxiosRequestConfig)=>{
  const method = 'DELETE'
  const headers = {
    "Content-Type": "application/json",
  }||config?.headers
  const responseType= "json"||config?.responseType
  const axiosConfig = {...config}
  Object.assign(axiosConfig,{url,method,headers,responseType,params:data})
  return request(axiosConfig)
}
export const $post =(url:string,data?:any,config?:AxiosRequestConfig)=>{
  const method = 'POST'
  const headers = {
    "Content-Type": "application/json",
  }||config?.headers
  const responseType= "json"||config?.responseType
  const axiosConfig = {...config}
  Object.assign(axiosConfig,{url,method,headers,responseType,data})
  return request(axiosConfig)
}
export const $put =(url:string,data?:any,config?:AxiosRequestConfig)=>{
  const method = 'PUT'
  const headers = {
    "Content-Type": "application/json",
  }||config?.headers
  const responseType= "json"||config?.responseType
  const axiosConfig = {...config}
  Object.assign(axiosConfig,{url,method,headers,responseType,data})
  return request(axiosConfig)
}
