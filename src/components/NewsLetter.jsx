import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 70vh;
  background-color: #b3e5fc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  ${mobile({ marginBottom: '0', fontSize: '2.5rem' })}
`
const Desc = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  max-width: 55rem;
  text-align: center;
  ${mobile({ fontSize: '1.4rem', maxWidth: '260px', margin: '3rem 0.5rem' })}
`
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  ${mobile({ width: '80%' })}
`
const Input = styled.input`
  border: none;
  flex: 8;
  margin: 0.2rem;
`
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: #03a9f4;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #0288d1;
    transform: scale(1.05);
  }
`
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Get Connected with us to grab amazing offers and for subscriber
        additional discount*
      </Desc>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
