import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.div`
  background-color: #03a9f4;
  height: 80px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.04), 0 4px 3px rgba(0, 0, 0, 0.1);
  display: grid;

  ${mobile({ height: '100px' })}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  ${mobile({
    height: '50px',
    flexDirection: 'column',
    padding: '1rem',
    margin: '0rem',
  })};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({ display: 'none' })}
`
const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
  width: 60%;
  /* border: 1px solid grey; */
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.6rem;
  padding: 1rem;
  ${mobile({ display: 'none' })}
`
const Input = styled.input`
  border: none;
  flex: 5;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: '2', marginBottom: '1rem' })}
`

const Logo = styled.h1`
  font-weight: 100;
  text-transform: uppercase;
  color: white;
  ${mobile({ fontSize: '1.5rem' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center' })}
`
const MenuItems = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.5rem;
`
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> Product</Language>
          <SearchContainer>
            <Input placeholder='search'></Input>
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>kart</Logo>
        </Center>
        <Right>
          <MenuItems>
            <NavLink to='/register'>Register</NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink to='/login'>Sign In</NavLink>
          </MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
