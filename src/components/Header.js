import React from 'react'
import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Nav
        className='justify-content-center text-center bg-dark'
        style={{ fontWeight: '900', fontSize: '2rem' }}
      >
        <Nav.Item className='col-sm-12 col-md-auto'>
          <Nav.Link href='/' className='text-light'>
            主頁
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='col-sm-12 col-md-auto'>
          <Nav.Link href='/aboutus' className='text-light'>
            關於我們
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='col-sm-12 col-md-auto'>
          <Nav.Link href='/introduction' className='text-light'>
            故事大綱
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='col-sm-12 col-md-auto'>
          <Nav.Link href='/operating' className='text-light'>
            操作玩法
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
