import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import c from './Search.module.scss'
import { FiSearch } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';
import Container from '../utils/Components'
import axios from 'axios';

const Search = () => {
    const { pathname } = useLocation()
    const [searchText, setSearchText] = useState("")
    const [searchData, setSearchData] = useState(null)
    const searchProduct = (e) => {
        e.preventDefault();
        axios.get(` https://api.escuelajs.co/api/v1/products/?title=${searchText}`)
            .then(response => setSearchData(response.data))
            .catch(err => console.log(err))
    }
    console.log(searchData)
    return pathname.includes("/register") ? <></> : (
        <>
            <Container>
                <div className={c.search__wrapper}>
                    <div className={c.search}>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <select className={c.shop__now}>
                            <option>Shop by category</option>
                        </select>
                        <form onSubmit={searchProduct}>
                            <div className={c.input__wrapper}>
                                <FiSearch />
                                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className={c.search__input} placeholder='Search for anything' />
                                <select>
                                    <option>All Categories</option>
                                </select>
                            </div>
                            <button className={c.search__btn}>Search</button>
                        </form>
                    </div>
                    {
                        searchText.length >= 1 &&
                        <div className={c.result}>
                            <div className={c.result__nav}>
                                <h3>#{searchText}</h3>
                            </div>
                            <div className={c.product__card__wrapper}>
                                {
                                    searchData?.map(product =>
                                        <Link to={`/product/${product.id}`}  className={c.searched__product__card} onClick={() => { setSearchData([]) }}>
                                            <img src={product?.images[0]} alt="product" />
                                            <div>
                                                <h3>{product?.title}</h3>
                                                <strong>{product?.price}</strong>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    }

                </div>
                <hr />
            </Container >
        </>
    )
}

export default Search