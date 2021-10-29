import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(7, 105, 252, 0.308)
  );

  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 1rem;
  background: #03a9f4;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  ${mobile({ width: '100%', margin: '1rem' })}
`

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 200;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 1rem 0 0;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  ${mobile({ minWidth: '100%' })}
`

const Aggrement = styled.span`
  margin: 0.7rem 0;
  color: white;
  font-size: 12px;
`

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background: white;
  border: 1px solid white;
  transition: 0.3s ease-out;
  margin-top: 1rem;
  border-radius: 5px;
  font-weight: 500;
  width: 40%;
  ${mobile({ width: '100%' })}

  &:hover {
    border: 1px solid white;
    background: #03a9f4;

    color: white;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create the Account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Aggrement>
            By creating an account. I cosent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </Aggrement>
          <Button> CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
