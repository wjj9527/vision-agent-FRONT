import {$get,$post} from '../index'

export const menuListGetting = ()=>$get('/background_editor/editor/menu/queryAll')

export const createMenuItemAction = (data:object)=>$post('/background_editor/editor/menu/add',data)
