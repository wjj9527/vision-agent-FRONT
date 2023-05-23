import {$get,$post,$delete,$put} from '../index'
const Satoken = '48bcc27e-7363-4bec-a7ae-a2cf722349b9'
export const menuListGetting = ()=>$get('/background_editor/editor/menu/queryAll')

export const createMenuItemAction = (data:object)=>$post('/background_editor/editor/menu/add',data)

export const deleteMenuItemById = (data:object)=>$delete('/background_editor/editor/menu/deleteById',data)

export const getPageSchema = (data:object)=>$get('/background_editor/editor/menu/queryByMenuId',data)

export const updateMenuName = (data:object)=>$put('/background_editor/editor/menu/edit',data)

export const updateCurrentTargetSchema =(data:object)=> $post('/background_editor/editor/menu/insertOrUpdate',data)

// export const chartsBarMockDataGetting = ()=>$post('/services/JCHomPage/getDemoHomeDeviceType',{},{baseURL:'http://office.plus1-tech.com:20089',Satoken})
