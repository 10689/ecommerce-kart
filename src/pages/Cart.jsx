import Navbar from '../components/Navbar'
import Announcement from '../components/Annouments'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: '1rem' })}
`

const Title = styled.h1`
  font-weight: 100;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`
const TopButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#03a9f4' : 'transparent'};
  color: ${(props) => (props.type === 'filled' ? 'white' : 'black')};
  ${mobile({ padding: '.5rem' })}
`
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`

const TopText = styled.span`
  text-decoration: underline;
  margin-right: 1rem;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0.5rem 1rem 0;
  ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

const Img = styled.img`
  width: 30%;
  ${mobile({ width: '40%', objectFit: 'contain' })}
  object-fit: cover;
`

const ProductName = styled.span`
  margin-bottom: 0.5rem;
`

const ProductId = styled.span`
  margin-bottom: 0.5rem;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 0.5rem;
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
// product price container

const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`

const ProductAmount = styled.div`
  font-size: 2rem;
  ${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.h1`
  font-weight: 500;
`

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: #03a9f4;
  opacity: 0.5;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid #03a9f4;
  padding: 2rem;
  border-radius: 0.5rem;
  height: 100vh;
  margin: 1px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '2rem'};
  ${mobile({
    fontWeight: (props) => props.type === 'total' && '400',
    fontSize: (props) => props.type === 'total' && '1.5rem',
  })}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  border: none;
  transition: all 0.3s ease-out;
  background-color: #03a9f4;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;

  font-weight: 500;

  &:hover {
    background-color: #0288d1;
    transform: scale(1.05);
  }
`

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart 2</TopText>
            <TopText> Wishlist (1)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {/* product one */}
            <Product>
              <ProductDetail>
                <Img src='https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                <Details>
                  <ProductName>
                    <b>Product :</b>Boots
                  </ProductName>
                  <ProductId>
                    <b>Id :</b>808080
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size: </b>12
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>3000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            {/* product two */}
            <Product>
              <ProductDetail>
                <Img src='https://media.istockphoto.com/photos/jeans-jacket-isolated-on-white-picture-id157428481?b=1&k=20&m=157428481&s=170667a&w=0&h=HDJA9nYuHUs7MpZUZXrUusgSv4QPUN32QLCkeBn7v5I=' />
                <Details>
                  <ProductName>
                    <b>Product :</b>Jeans Jacket
                  </ProductName>
                  <ProductId>
                    <b>Id :</b>808080
                  </ProductId>
                  <ProductColor color='#6F8FAF' />
                  <ProductSize>
                    <b>Size: </b>XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>5000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            {/* summary item one */}
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>8000</SummaryItemPrice>
            </SummaryItem>
            {/* summary item two */}
            <SummaryItem>
              <SummaryItemText>Estimate Shipping</SummaryItemText>
              <SummaryItemPrice>1000</SummaryItemPrice>
            </SummaryItem>
            {/* summary item three */}
            <SummaryItem>
              <SummaryItemText>Discount on Shipping</SummaryItemText>
              <SummaryItemPrice>500</SummaryItemPrice>
            </SummaryItem>
            {/* summary item four */}
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>8500</SummaryItemPrice>
            </SummaryItem>
            {/* button */}
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
