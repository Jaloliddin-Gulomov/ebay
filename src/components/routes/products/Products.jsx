import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../../utils/Components'
import { Link, useParams } from 'react-router-dom'
import c from './Products.module.scss'

const Products = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then(response => setData(response.data))
  }, [id])
  console.log(data)
  return (
    <>
      <Container>
        <div className={c.products__page}>
          {
            data ?
              data.map(product =>
                <Link to= {`/product/${product.id}`} className={c.product__card}>
                  <img src={product.images[0]} alt="" />
                  <p>{product.title}</p>
                  <strong>${product.price}</strong>
                </Link>
              )
              :
              <></>
          }
        </div>
      </Container>
    </>
  )
}

export default Products