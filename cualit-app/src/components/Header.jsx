import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #363636;
  display: flex;
  flex-direction: row;
`

const Logo = styled.span`
  color: #dadada;
  font-size: 24px;
  font-weight: 500;
  line-height: 50px;
  margin-left: 20px;
`

const Item = styled.span`
  a {
    color: #dadada;
    font-size: 20px;
    font-weight: 300;
    line-height: 50px;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Tutos.com</Logo>
      <Item>
        <Link to="/">Tutoriales</Link>
      </Item>
      <Item>
        <Link to="/add">Agregar</Link>
      </Item>
    </HeaderContainer>
  )
}

export default Header
