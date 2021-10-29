import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: 90vh;
`
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.15);
  ${mobile({ height: '33vh' })}
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
  background: white;
  margin-bottom: 2rem;
  padding: 1rem;
`
const Button = styled.button`
  border: none;
  background: #03a9f4;
  padding: 1rem;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #0288d1;
    transform: scale(1.05);
  }
`
const NavLink = styled(Link)`
  color: black;
`

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </NavLink>
    </Container>
  )
}

export default CategoriesItem
