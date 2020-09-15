import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IntroContainer from '../components/IntroContainer'
import { nameText, introText } from '../assets/text/intro'
import maynardImg from '../assets/image/maynard.png'
import pistolImg from '../assets/image/pistol.png'
import ShotGunImg from '../assets/image/ShotGun.png'
import AssaultRifleImg from '../assets/image/AssaultRifle.png'
import GrenadeLauncheImg from '../assets/image/GrenadeLaunche.png'
import RocketLauncherImg from '../assets/image/RocketLauncher.png'

const Introduction = () => {
  const ImageUrl = [
    maynardImg,
    pistolImg,
    ShotGunImg,
    AssaultRifleImg,
    GrenadeLauncheImg,
    RocketLauncherImg,
  ]

  const handleIntro = () => {
    let item = nameText.map((item, i) => {
      if (i > 0) {
        return (
          <IntroContainer
            title={item}
            intro={introText[i]}
            imageUrl={ImageUrl[i]}
            key={i}
          />
        )
      }
    })
    return item
  }

  return (
    <Container id='introduction'>
      <Row>
        <Col>
          <p>
            該遊戲背景為主角是一名準備應徵太空站人員的考生，依照公司要求進行"飛船遇敵模擬裝置"的測驗，在測驗的過程中會遇到大量的外星生物以便模擬，請各位玩家幫忙操控主角完成考試任務吧~
          </p>
        </Col>
      </Row>
      <Row id='intro-monster'>
        <Col md={12}>
          <h4>怪物簡介</h4>
          <hr color='white' />
        </Col>
        <IntroContainer
          title={nameText[0]}
          intro={introText[0]}
          imageUrl={ImageUrl[0]}
        />
      </Row>
      <Row>
        <Col md={12}>
          <h4>武器簡介</h4>
          <hr color='white' />
        </Col>
        {handleIntro()}
      </Row>
    </Container>
  )
}

export default Introduction
