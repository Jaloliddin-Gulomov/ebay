import React, { useState } from 'react'
import Container from '../../utils/Components'
import banner from '../../../assets/banner.png'
import c from './Home.module.scss'
import image from '../../../assets/image.png'
import Categories from '../../main/Categories'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Search from '../../search/Search'

const Home = () => {
  const [data, setData] = useState(0)
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products")
    .then(response => setData(response.data))
  }, [])
  return (
    <div>
      <Container>
        <Search/>
        <div className={c.banner}>
          <img src={banner} alt="banner" />
          <img src={image} alt="save it" />
        </div>
        <Categories/>
        <section className={c.home__product}>
          <h2>Today's Deals – All With Free Shipping</h2>
          <div className={c.products__wrapper}>
            {
              data ? 
              data.slice(0, 5).map(product =>
                <Link to={`/product/${product.id}`} className={c.product__card}>
                  <img src={product.images[0]} alt="Product" />
                  <h3>{product.title}</h3>
                  <strong>${product.price}</strong>
                </Link>
              )
              :
              <></>
            }
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Home