import React from 'react'
import { Container } from 'react-bootstrap'

import index0 from '../assets/image/index0.PNG'

const Index = () => {
  return (
    <Container>
      <p>
        MAYNARD 這款遊戲設計結構以 Unreal 為主，以完整的射擊遊戲結合虛擬實境
        作為我們研究的目的，操作 Unreal 物件程式設計以及做遊戲角
        色的移動、射擊、遭受攻擊和關卡的設置燈光和場景搭建並匯入 音效，設計及加入劇情故事。
      </p>
      <img src={index0} alt={'船艦場景圖'} className='d-inline-block w-100'></img>
    </Container>
  )
}

export default Index
