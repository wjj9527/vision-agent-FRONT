//基础容器
import BasicContainer from './container/BasicContainer'

const setting = {
  BasicContainer:BasicContainer.setting
}

const component = {
  BasicContainer:BasicContainer.component
}

const plugin = [
  {
    label:'容器',
    value:'container',
    items:[
      {
        label:'基础容器',
        value:'BasicContainer',
        searchEKEY:'JCRQ',
        icon:'icon-yemiankuangjia_o',
        component:BasicContainer.component
      }
    ]
  }
]

export {
  setting,
  component,
  plugin
}
