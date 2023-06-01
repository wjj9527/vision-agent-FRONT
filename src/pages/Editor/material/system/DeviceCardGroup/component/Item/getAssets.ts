const getAssets = (list:[])=>{
  const fault = list.find((item:any)=>item.typeName === 'fault')
  const func = list.find((item:any)=>item.typeName === 'function')
  //@ts-ignore
  if (fault&&fault?.pointsValue==='1') {
    return require('./images/故障.png')
    //@ts-ignore
  }else if(func&&['0','1'].includes(func?.pointsValue)){
    //@ts-ignore
    const status = Number(func?.pointsValue)
    return !status ?require('./images/运行.png'):require('./images/停止.png')
    //@ts-ignore
  }else if(fault&&fault?.pointsValue==='0'&&func?.pointsValue==='--'){
    return require('./images/在线.png')
  }else{
    return require('./images/error.png')
  }
}
export default getAssets
