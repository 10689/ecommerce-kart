import styled from 'styled-components'
import Annouments from '../components/Annouments'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'
import { useState } from 'react'

const Container = styled.div``
const Title = styled.h1`
  font-size: 2rem;
  padding: 2rem;

  ${mobile({
    padding: '1rem',
    textAlign: 'center',
  })}
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
  })}
`
const Filter = styled.div`
  margin: 2rem;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceEvenly',
    margin: '0',
    textAlign: 'center',
    padding: '0 2rem',
  })}
`
const FilterText = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  margin-right: 20px;
  ${mobile({
    marginRight: '0',
  })}
`
const FilterSelect = styled.select`
  padding: 0.5rem;
  margin-right: 0.5rem;
  background-color: #03a9f4;
  border: none;
  font-weight: 600;

  ${mobile({
    margin: '2rem 0',
    padding: '1rem',
    fontSize: '1rem',
  })};
`
const FilterOption = styled.option``
const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilter = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  const handleSort = (e) => {
    const value = e.target.value

    setSort(value)
  }

  return (
    <Container>
      <Annouments />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>

          <FilterSelect name='color' onChange={handleFilter}>
            <FilterOption defaultValue>Color</FilterOption>
            <FilterOption>Red</FilterOption>
            <FilterOption>Blue</FilterOption>
            <FilterOption>Green</FilterOption>
            <FilterOption>White</FilterOption>
            <FilterOption>Blue</FilterOption>
          </FilterSelect>
          <FilterSelect name='size' onChange={handleFilter}>
            <FilterOption defaultValue>Size</FilterOption>
            <FilterOption>S</FilterOption>
            <FilterOption>M</FilterOption>
            <FilterOption>L</FilterOption>
            <FilterOption>XL</FilterOption>
            <FilterOption>XXL</FilterOption>
          </FilterSelect>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <FilterSelect onChange={handleSort}>
            <FilterOption value='newest'>Newest</FilterOption>
            <FilterOption value='asc'>Price(asc)</FilterOption>
            <FilterOption value='desc'>Price(desc)</FilterOption>
          </FilterSelect>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList
