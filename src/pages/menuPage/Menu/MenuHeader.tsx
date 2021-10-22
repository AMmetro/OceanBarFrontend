import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {PATH} from './MenuRoutes'
import './Menu.scss'  

 
const MenuHeader = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={2}>
          <NavLink
            className={'linkStyle2'}
            activeClassName={'activeLink2'}
            to={PATH.PLATO}>
            <h4 >Плато</h4>
          </NavLink>
        </Col>
        <Col xs={2}>
          <NavLink
            className={'linkStyle2'}
            activeClassName={'activeLink2'}

            to={PATH.SOUP}>
            <h4>Супы</h4>
          </NavLink>
        </Col>
        <Col xs={2}>
          <NavLink
            className={'linkStyle2'}
            activeClassName={'activeLink2'}
            to={PATH.SALAD}>
            <h4>Салаты</h4>
          </NavLink>
        </Col>

        <Col xs={3}>
          <NavLink
            className={'linkStyle2'}
            activeClassName={'activeLink2'}
            to={PATH.OYSTERS}>

            <h4 >Запеченные устрицы</h4>
          </NavLink>
        </Col>

        <Col xs={2}>
          <NavLink 
            className={'linkStyle2'}
            activeClassName={'activeLink2'}
            to={PATH.DESSERT}>

            <h4 >Дессерты</h4>
          </NavLink>
        </Col>

      </Row>
      <hr style={{height: "2px", borderWidth:"0", color: "gray", backgroundColor:"gray"}}  />
    </Container>
  )
}

export default MenuHeader
