import React, { useEffect, useState } from 'react'
import Container from '../../utils/Components'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import c from './Product.module.scss'
const Product = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [activeImg, setactiveImg] = useState(0)
    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => setProductData(response.data))
    }, [id])
    console.log(productData);
    return (
        <>
            <Container>
                <div className={c.product__page}>
                    <div className={c.product__img}>
                        <div className={c.all__images}>
                            {
                                productData?.images.map((image, indx) => (
                                    <img
                                        style={
                                            indx === activeImg
                                                ? { border: "2px solid dodgerblue" }
                                                : { border: "1px solid #767676" }}
                                        width={100}
                                        src={image}
                                        alt="product"
                                        onClick={() => setactiveImg(indx)}
                                    />
                                ))

                            }
                        </div>
                        {
                            productData ? (
                                <div className={c.product__card}>
                                    <img src={productData.images[activeImg]} className={c.mainImg} alt="product" />
                                    <div>
                                        <h2>{productData.title}</h2>
                                        <hr />
                                        <div className={c.description}>
                                            <p>Description:</p>
                                            <p>{productData.description}</p>
                                        </div>
                                        <hr />
                                        <div className={c.price__wrapper}>
                                            <div className={c.pricee}>
                                                <p>Price:</p>
                                                <div className={c.price}>
                                                    <h3>US</h3>
                                                    <strong>${productData.price}</strong>
                                                </div>
                                            </div>
                                            <div className={c.button__wrapper}>
                                                <button className={c.buy} >Buy It Now</button>
                                                <button className={c.cart}>Add To Cart</button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Product