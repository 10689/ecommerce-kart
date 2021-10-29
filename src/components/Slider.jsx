import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`
const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #03a9f4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`
const Wrapper = styled.section`
  height: 100%;
  display: flex;
  transition: all 0.5s ease-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const Img = styled.img`
  height: 80%;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.15);
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 3.125rem;
`
const Title = styled.h1`
  font-size: 3rem;
  color: black;
`
const Desc = styled.p`
  color: black;
  margin: 2rem 0;
  font-size: 25px;
  letter-spacing: 2px;
`
const Btn = styled.button`
  padding: 20px;
  color: white;
  background-color: #03a9f4;
  font-size: 1.5rem;
  border: none;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.04), 0 4px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #0288d1;
    transform: scale(1.05);
  }
`

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    if (direction === 'right') {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          const { id, img, title, desc, bg } = item
          return (
            <Slide key={id} bg={bg}>
              <ImgContainer>
                <Img src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc> {desc}</Desc>
                <Btn>
                  <NavLink to={`/products/${item.cat}`}>Shop Now</NavLink>
                </Btn>
              </InfoContainer>
            </Slide>
          )
        })}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
