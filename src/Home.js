import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AProduct from './AProduct'




export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(function () {
    async function fetchProducts() {
      const response = await axios.get("http://127.0.0.1:8000/api/product/")
      setProducts(response.data)
    }
    fetchProducts()
  }, [])



  return <div className='container mt-5'>
    <div className='row justify-content-evenly'>
      {products.map((product) => <AProduct product={product}  key={product.id} />)}
    </div>
  </div>
}
