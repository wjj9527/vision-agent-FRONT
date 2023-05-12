#### schema数据示例
```json
{
  "label": "页面",
  "type": "page",
  "id": "0",
  "data": {},
  "children": [
    {
      "label": "基础容器",
      "type": "container",
      "value": "BasicContainer",
      "id": "y8jza87k-g1hp-41f2-xp8t-jasnsym43qsd",
      "data": {
        "style": {
          "display": "block",
          "flexDirection": "row",
          "justifyContent": "flex-start",
          "alignItems": "flex-start",
          "flexWrap": "nowrap",
          "marginTop": "10",
          "marginBottom": "10",
          "marginLeft": "10",
          "marginRight": "10",
          "paddingTop": "10",
          "paddingBottom": "10",
          "paddingLeft": "10",
          "paddingRight": "10",
          "width": null,
          "height": null,
          "widthPrefix": "px",
          "heightPrefix": "px"
        }
      },
      "children": [
        {
          "label": "子容器",
          "type": "container",
          "id": "s9zpgvw2-mt9r-4war-z28z-3ghd5xhq3z8j",
          "data": {
            "style": {
              "display": "block",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignItems": "flex-start",
              "flexWrap": "nowrap",
              "marginTop": "10",
              "marginBottom": "10",
              "marginLeft": "10",
              "marginRight": "10",
              "paddingTop": "10",
              "paddingBottom": "10",
              "paddingLeft": "10",
              "paddingRight": "10",
              "width": null,
              "height": null,
              "widthPrefix": "px",
              "heightPrefix": "px"
            }
          }
        },
        {
          "label": "子容器",
          "type": "container",
          "id": "u2gs49tz-91gs-42vk-g2pp-xzlva9nsllby",
          "data": {
            "style": {
              "display": "block",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignItems": "flex-start",
              "flexWrap": "nowrap",
              "marginTop": "10",
              "marginBottom": "10",
              "marginLeft": "10",
              "marginRight": "10",
              "paddingTop": "10",
              "paddingBottom": "10",
              "paddingLeft": "10",
              "paddingRight": "10",
              "width": null,
              "height": null,
              "widthPrefix": "px",
              "heightPrefix": "px"
            }
          }
        },
        {
          "label": "子容器",
          "type": "container",
          "id": "xf6k1fpt-md9y-40xp-umlf-9pacc97x77db",
          "data": {
            "style": {
              "display": "block",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignItems": "flex-start",
              "flexWrap": "nowrap",
              "marginTop": "10",
              "marginBottom": "10",
              "marginLeft": "10",
              "marginRight": "10",
              "paddingTop": "10",
              "paddingBottom": "10",
              "paddingLeft": "10",
              "paddingRight": "10",
              "width": null,
              "height": null,
              "widthPrefix": "px",
              "heightPrefix": "px"
            }
          }
        }
      ]
    },
    {
      "label": "基础容器",
      "type": "container",
      "value": "BasicContainer",
      "id": "5gqnqk0d-r3mq-41dg-gnn1-grwkq5rt4hqk",
      "data": {
        "style": {
          "display": "block",
          "flexDirection": "row",
          "justifyContent": "flex-start",
          "alignItems": "flex-start",
          "flexWrap": "nowrap",
          "marginTop": "10",
          "marginBottom": "10",
          "marginLeft": "10",
          "marginRight": "10",
          "paddingTop": "10",
          "paddingBottom": "10",
          "paddingLeft": "10",
          "paddingRight": "10",
          "width": null,
          "height": null,
          "widthPrefix": "px",
          "heightPrefix": "px"
        }
      }
    }
  ]
}
```

#### 根据id检索元素方法
```typescript
interface DataType {
  style?:{}
}
export interface Container {
  label: string;
  type: string;
  id: string;
  data:DataType
  children?: (Container | BasicContainer)[];
}

export interface BasicContainer extends Container {
  value: string;
}
interface ContainerProps {
  element:Container|BasicContainer|null,
  parent:Container|null
}
export const findContainerById=(
  id: string,
  obj: Container,
): ContainerProps =>{
  if (obj.id === id) {
    return { element: obj, parent: null };
  }
  if (obj.children) {
    for (let i = 0; i < obj.children.length; i++) {
      const child = obj.children[i];
      if (child.id === id) {
        return { element: child, parent: obj };
      } else {
        const result = findContainerById(id,child, );
        if (result.element !== null) {
          return result;
        }
      }
    }
  }
  return { element: null, parent: null };
}

```

#### 根据id修改元素label示例

```typescript
[TYPES.RENDER_TREE_UPDATE_ELEMENT_LABEL_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {id,callback,label} = action
    const {element} = findContainerById(id,schema)
    if (element) {
      element.label = label
      callback&&callback()
    }
},

```
#### 固定id元素后面移动item到另一个item后方
```typescript
//将对应id为insertId的元素移动到对应id为containerId的后方(同父级元素)
[TYPES.RENDER_TREE_INSERT_TO_ELEMENT_BY_ID]:(state:any,action:any)=>{
    const schema = state.renderTree.schema
    const {insertId,containerId,} = action
    const {element,parent} = findContainerById(insertId,schema)
    if (element) {
      const list = parent?.children
      const insetIndex = list?.findIndex(item=>item.id===insertId)
      // @ts-ignore
      const [insertData] = (insetIndex!==-1)?list?.splice(insetIndex,1):{}
      const containerIndex = list?.findIndex(item=>item.id===containerId)
      // @ts-ignore
      list?.splice(containerIndex+1,0,insertData)
    }
  }
```
#### 随机id生成
```typescript
  const createUUID =()=>{
  let uuid = '';
  const chars = 'abcdefghjklmnpqrstuvwxyz0123456789';
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else if (i === 14) {
      uuid += '4';
    } else {
      uuid += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return uuid;
}

export default createUUID
```

#### commit阶段
利用深拷贝维持数据不可变提供新数据提交,方式多变，获取

```typescript
import { useContext, useState } from 'react';

const [] = useState({...schema})

```
