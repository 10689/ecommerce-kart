import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px;
  flex: 1;
  min-width: 280px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80deea;
  position: relative;
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  box-shadow: 0 20px 13px rgba(0, 0, 0, 0.03), 0 8px 5px rgba(0, 0, 0, 0.08);
`
const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 2;
`
const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: all 0.3 ease-out;

  &:hover {
    opacity: 1;
  }
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  transition: all 0.3 ease-out;

  &:hover {
    background-color: #80deea;
    transform: scale(0.9);
  }
`
const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
