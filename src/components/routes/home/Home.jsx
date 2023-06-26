import React, { useState } from 'react'
import Container from '../../utils/Components'
import banner from '../../../assets/banner.png'
import c from './Home.module.scss'
import image from '../../../assets/image.png'
import Categories from '../../main/Categories'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.scss";
import { Mousewheel } from "swiper";

const Home = () => {
  const [data, setData] = useState(0)
  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products")
      .then(response => setData(response.data))
  }, [])
  return (
    <div>
      <Container>
        <div className={c.banner}>
          <img src={banner} alt="banner" />
          <img className={c.advertising} src={image} alt="save it" />
        </div>
        <Categories />
        <section className={c.home__product}>
          <h2>Today's Deals – All With Free Shipping</h2>
          <Swiper
            mousewheel={true}
            modules={[Mousewheel]}
            className="mySwiper"
            breakpoints={{
              375: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
          >
            {
              data ?
                data.map(product =>
                  <SwiperSlide>
                    <Link to={`/product/${product.id}`} className={c.product__card}>
                      <img src={product.images[0]} alt="Product" />
                      <div>
                        <h3>{product.title.slice(0, 15)}</h3>
                        <strong>${product.price}</strong>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
                :
                <></>
            }
          </Swiper>
        </section>
        <hr />
        <footer>
          <div>
            <h4>Buy</h4>
            <ul>
              <li><Link className={c.footer__text}>Registration</Link></li>
              <li><Link className={c.footer__text}>eBay Money Back Guarantee</Link></li>
              <li><Link className={c.footer__text}>Bidding & buying help</Link></li>
              <li><Link  className={c.footer__text}>Stores</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sell</h4>
            <ul>
              <li><Link className={c.footer__text}>Start selling</Link></li>
              <li><Link className={c.footer__text}>Learn to sell</Link></li>
              <li><Link className={c.footer__text}>Affiliates</Link></li>
            </ul>
          </div>
          <div>
            <h4>Stay connected</h4>
            <ul>
              <li><Link className={c.footer__text}>eBay's Blogs</Link></li>
              <li><Link className={c.footer__text}>Facebook</Link></li>
              <li><Link className={c.footer__text}>Twitter</Link></li>
            </ul>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Home