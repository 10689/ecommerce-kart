import styled from 'styled-components'

const Container = styled.div`
  height: 2rem;
  background-color: #0288d1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 5px rgba(1, 0, 0, 0.08);
`

const Annouments = () => {
  return (
    <Container>
      <small>Build by Javeed Ahmed | React with styled-Component</small>
    </Container>
  )
}

export default Annouments
