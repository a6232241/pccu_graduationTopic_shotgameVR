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
            在該遊戲中提供了各式各樣的槍枝供玩家使用，請使用這些槍枝來達成關卡吧 !
            <br />
            下列為遊戲當中的敵人和槍枝，各類槍枝會在各個關卡中出現，只要玩家靠近即可切換槍枝~
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
