import {
  Facebook,
  Instagram,
  MailOutlineOutlined,
  PaymentOutlined,
  Phone,
  Pinterest,
  RoomOutlined,
  YouTube,
} from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })}
  background-color: #B3E5FC;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
const Logo = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
`
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 15px;
`
const Center = styled.div`
  flex: 1;
  padding: 2rem;

  ${mobile({ backgroundColor: '#B3E5FC' })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`

const Right = styled.div`
  flex: 1;
  padding: 2rem;
`
const Contact = styled.h2`
  margin-bottom: 1rem;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E Commerce Shopping</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          neque! Expedita excepturi repudiandae possimus mollitia dolor
          explicabo, iste non, voluptatum perspiciatis repellat eius tempora,
          nihil animi eos est magni ea!
        </Desc>
        <SocialContainer>
          <SocialIcons color={'0D47A1'}>
            <Facebook />
          </SocialIcons>
          <SocialIcons color={'B71C1C'}>
            <Instagram />
          </SocialIcons>
          <SocialIcons color={'D50000'}>
            <YouTube />
          </SocialIcons>
          <SocialIcons color={'D50000'}>
            <Pinterest />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Popular Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Clothing</ListItem>
          <ListItem>Womens Clothing</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Contact>Contact</Contact>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +91 111 555 00
        </ContactItem>
        <ContactItem>
          <RoomOutlined style={{ marginRight: '10px' }} />
          Address
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlined style={{ marginRight: '10px' }} />
          care@ecommerce.com
        </ContactItem>
        <ContactItem>
          <PaymentOutlined style={{ marginRight: '10px' }} />
          Mastercard | Visa | American Express
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
