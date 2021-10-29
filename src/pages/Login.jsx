import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(7, 105, 252, 0.308)
  );
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 20%;
  padding: 1rem;
  background: #03a9f4;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  ${mobile({ width: '80%' })}
`
const Title = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 200;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background: white;
  text-align: center;
  border: 1px solid white;
  margin-top: 1rem;
  border-radius: 5px;
  font-weight: 500;
  width: 40%;

  &:hover {
    background: #03a9f4;
    border: 1px solid white;
    color: white;
  }
`
const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Login Account</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DO NOT REMEBER PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
