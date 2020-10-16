import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IntroContainer from '../components/IntroContainer'
import { nameText, operateText } from '../assets/text/operate'
import point0 from '../assets/image/point0.bmp'
import point1 from '../assets/image/point1.bmp'
import point2 from '../assets/image/point2.bmp'
import point3 from '../assets/image/point3.bmp'

const Operating = () => {
  const ImageUrl = [point0, point1, point2, point3]

  const handleIntro = () => {
    let item = nameText.map((item, i) => {
      return (
        <IntroContainer
          title={item}
          intro={operateText[i]}
          imageUrl={ImageUrl[i]}
          key={i}
        />
      )
    })
    return item
  }
  return (
    <Container id='operating'>
      <Row>
        <Col>
          <p>
            該遊戲背景為主角是一名準備應徵太空站人員的考生，依照公司要求進行"飛船遇敵模擬裝置"的測驗，在測驗的過程中會遇到大量的外星生物以便模擬，請各位玩家幫忙操控主角完成考試任務吧~
          </p>
        </Col>
      </Row>
      {/* <Row >
        <Col md={12}>
          <h4>關卡介紹</h4>
          <hr color='white' />
        </Col>
        <IntroContainer
          title={nameText[0]}
          intro={introText[0]}
          imageUrl={ImageUrl[0]}
        />
      </Row> */}
      <Row id='operate-checkpoint'>
        <Col md={12}>
          <h4>關卡介紹</h4>
          <hr color='white' />
        </Col>
        {handleIntro()}
      </Row>
    </Container>
  )
}

export default Operating
