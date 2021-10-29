import styled from 'styled-components'
import ProductItem from './ProductItem'
import { popularProducts } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.2rem;
  ${mobile({ marginTop: '0rem' })}
`

const Products = ({ cat, filter, sort }) => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <ProductItem item={item} key={item.id} />
      })}
    </Container>
  )
}

export default Products
