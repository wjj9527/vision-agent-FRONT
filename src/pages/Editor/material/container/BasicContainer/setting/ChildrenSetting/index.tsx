import React from 'react';
import ChildrenSettingBlock from '@/pages/Editor/material/components/ChildrenSetting';
interface IProps {
  id:string
}
const ChildrenSetting: React.FC<IProps> = ({id}) => {
  return <>
    <ChildrenSettingBlock id={id}/>
  </>
};

export default ChildrenSetting;
