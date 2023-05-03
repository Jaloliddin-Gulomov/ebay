import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from './Categories.module.scss'
import axios from 'axios'

const Categories = () => {
    const [categoriesData, setcategoriesData] = useState([]);
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/categories")
        .then(response => setcategoriesData(response.data))
    }, [])
  return (
    <section className={c.categories}>
        <h2>Score these trending kicks</h2>
        <div className={c.category__wrapper}>
            {
                categoriesData ? 
                categoriesData.slice(0, 7).map(category => 
                    <Link to={`/products/${category.id}`} className={c.category__item}>
                        <div className={c.category__img}>
                            <img src={category.image} alt="category" />
                        </div>
                        <p>{category.name}</p>
                    </Link>
                )
                :
                <p>Loading...</p>
            }
        </div>
    </section>
  )
}

export default Categories