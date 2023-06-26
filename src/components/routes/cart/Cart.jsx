import React from 'react'
import { useSelector } from 'react-redux'
import c from './Cart.module.scss'
import Container from '../../utils/Components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const storeData = useSelector(state => state)
    console.log(storeData.cartProducts)
    const productPrices = storeData.cartProducts.map(i => +i.price)
    const total = productPrices.reduce((a, b) => a + b, 0)
    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch({id, type: "REMOVE_PRODUCT"})
    }
    return (
        <Container>
            <div className={c.cart__page}>
                <div className={c.product__card__wrapper}>
                    {
                        storeData.cartProducts.map(product =>
                            <div className={c.productCard}>
                                <div className={c.product__card}>
                                    <div className={c.product__img}>
                                        <img src={product?.images[0]} alt="product" />
                                    </div>
                                    <div className={c.title__wrapper}>
                                        <div className={c.product__title}>
                                            <h3>{product.title}</h3>
                                            <strong>US ${product.price}</strong>
                                        </div>
                                        <p className={c.description}>{product.description}</p>
                                    </div>
                                </div>
                                <Link className={c.remove} onClick={() => removeProduct(product.id)}>Remove</Link>
                            </div>
                        )
                    }
                </div>
                <div className={c.total__wrapper}>
                    <div>
                        <h3>Subtotal:</h3>
                        <strong>${total}</strong>
                    </div>
                    <div>
                        <h3>Items:</h3>
                        <h3>{storeData.cartProducts.length}</h3>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart