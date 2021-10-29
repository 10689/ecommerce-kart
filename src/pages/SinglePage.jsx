import styled from 'styled-components'
import Annouments from '../components/Annouments'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 90vh;
  ${mobile({ height: '50vh' })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: '20px' })}
`
const InfoTitle = styled.h1`
  font-weight: 200;
  font-size: 3rem;
`
const InfoDes = styled.p`
  margin: 1rem 0;
`
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
const FilterTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 200;

  margin-right: 0.5rem;
`
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 0.7rem;
  cursor: pointer;
`
const FilterSizeSelect = styled.select`
  padding: 0.5rem 1rem;
  background-color: white;
  color: #03a9f4;
  border: 1px solid teal;
  font-size: 1rem;
  font-weight: bold;
`
const FilterSizeOPtion = styled.option`
  color: #03a9f4;
  font-size: 1rem;

  margin-left: 0.5rem;
`

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 1rem;
  ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const Amount = styled.span`
  font-size: 1.3rem;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #0288d1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  font-weight: 500;
`
const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #0288d1;
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
  ${mobile({
    fontSize: '.75rem ',
    padding: '0.25rem 0.50rem',
  })}

  &:hover {
    background-color: #0288d1;
    color: white;
  }
`

const SinglePage = () => {
  return (
    <Container>
      <Annouments />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src='https://images.unsplash.com/photo-1514409101893-7db2a465592d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRlbmltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></Img>
        </ImgContainer>
        <InfoContainer>
          <InfoTitle>Denim</InfoTitle>
          <InfoDes>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            inventore, dicta delectus autem in nemo rem, cupiditate mollitia
            eius assumenda consectetur enim facilis minus id obcaecati. Velit
            animi qui consequuntur!
          </InfoDes>
          <Price>5000</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='grey' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSizeSelect>
                <FilterSizeOPtion>S</FilterSizeOPtion>
                <FilterSizeOPtion>M</FilterSizeOPtion>
                <FilterSizeOPtion>L</FilterSizeOPtion>
                <FilterSizeOPtion>XL</FilterSizeOPtion>
                <FilterSizeOPtion>XXL</FilterSizeOPtion>
              </FilterSizeSelect>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default SinglePage
