import React from 'react';
import './style.less'
import MenuList from '@/pages/Preview/components/Menu';
const Preview:React.FC =()=>{
  return <div className="preview-container-body">
    <div className='preview-header'></div>
    <div className='preview-content'>
      <div className='preview-menu-content'>
        <MenuList/>
      </div>
      <div className='preview-view'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem ducimus facilis fugiat inventore quasi repellat! Adipisci alias animi dignissimos, eligendi molestias nemo quam quas sed tempora temporibus ullam velit!
      </div>
    </div>
  </div>
}

export default Preview
