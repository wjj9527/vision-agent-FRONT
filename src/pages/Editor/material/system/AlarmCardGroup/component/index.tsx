import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ElementBody from '@/pages/Editor/material/components/ElementBody';
import classNames from 'classnames';
import { Popover } from 'antd';
import './style.less';
import getAssets from './getAssets';
import axios from 'axios';

interface ElementProps {
  id: string,
  children?: ReactNode[],
  type: string,
  label: string,
  onMove?: Function | null | undefined,
  className?: string,
  data: DataType
}

interface DataType {
  style: object,
  datasource: object,
  attribute: any,
  onlineXHR: any
}

const CardGroup: React.FC<ElementProps> = (props) => {
  const { data, id, label } = props;
  const { style } = data;
  return <ElementBody style={style} id={id} label={label}>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor dolorem eaque, eius incidunt minus necessitatibus nihil officiis quam quisquam. Ad asperiores atque earum eius facilis modi necessitatibus nulla quibusdam?
    </div>
  </ElementBody>;
};
export default CardGroup;
