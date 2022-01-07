import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
  width: 70%;
  height: 120px;
  border-radius: 7px;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: 20px;
  border: 1px solid black;
  margin: 50px auto;
`

const Title = styled.span`
  font-weight: bold;
  color: black;
  font-size: 26px;
  display: block;
  margin-top: 25px;
`

const Subtitle = styled.span`
  font-weight: bold;
  color: #7e7e7e;
  font-size: 18px;
  display: block;
  margin-top: 10px;
`

const ActionText = styled.span`
  font-weight: bold;
  color: #10c137;
  font-size: 18px;
  cursor: pointer;
`

const EmptyBanner = () => {
  const history = useHistory()
  return (
    <Container>
      <Title>No hay tutoriales aquí</Title>
      <Subtitle>
        Comencemos por{' '}
        <ActionText onClick={() => history.push(`/add`)}>agregar</ActionText>{' '}
        uno
      </Subtitle>
    </Container>
  )
}

export default EmptyBanner
