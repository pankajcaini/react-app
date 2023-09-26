
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ACartProduct from './ACartProduct'
import { useNavigate } from 'react-router-dom'
import CartProductInvoice from './CartProductInvoice'




export default function Cart() {

  const sendto = useNavigate()
  const IS_LOGGED_IN = localStorage.getItem('IS_LOGGED_IN')
  if (IS_LOGGED_IN == null) {
    sendto('/login')
  }


  const [products, setProducts] = useState([])


  useEffect(function () {
    async function fetch_products_in_cart() {
      const user_id = localStorage.getItem('USER_ID')
      if (user_id != null) {
        const response = await axios.get(`http://127.0.0.1:8000/cart/${user_id}/`)
        setProducts(response.data)
      }
    }
    fetch_products_in_cart()
  }, [])




  return <div className='container'>
    <div className='row justify-content-center'>
      {products.map(function (product) { return <ACartProduct product={product} key={product.id} products={products} setProducts={setProducts} /> })}
    </div>

    {

      products.length != 0 ?

      <div className='row justify-content-center mt-5 mb-5'>
        <div className='col-2'>
          <button className="btn btn-primary" onClick={() => { sendto("/invoice") }}>Place Order</button>
        </div>
      </div> : null

    }

  </div>
}
