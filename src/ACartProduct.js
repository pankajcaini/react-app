import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function ACartProduct({ product, products, setProducts }) {


    const [quantity, setquantity] = useState(1)
    const [total_price, set_total_price] = useState(0)
    const [cart_id, set_cart_id] = useState(0)



    useEffect(function () {
        setquantity(product.quantity)
        const TP = product.quantity * product.product.price
        set_total_price(TP)
        set_cart_id(product.id)
    }, [])





    async function increase_quantity(e) {
        if (quantity < 5) {
            const product_id = e.target.dataset.id
            const response = await axios.get(`http://127.0.0.1:8000/increase_quantity/${product_id}/`)
            const new_quantity = response.data.quantity
            const TOTAL_PRICE = response.data.total_price
            setquantity(new_quantity)
            set_total_price(TOTAL_PRICE)
        }
    }




    async function decrease_quantity(e) {
        if (quantity != 1) {
            const product_id = e.target.dataset.id
            const response = await axios.get(`http://127.0.0.1:8000/decrease_quantity/${product_id}/`)
            const new_quantity = response.data.quantity
            const TOTAL_PRICE = response.data.total_price
            setquantity(new_quantity)
            set_total_price(TOTAL_PRICE)
        }
    }




    async function remove_from_cart(e) {
        const product_id = e.target.dataset.id
        const response = await axios.get(`http://127.0.0.1:8000/remove_from_cart/${product_id}/`)
        setProducts(response.data)
    }





    return <div className="col-sm-8 mt-5">
        <div className="card shadow border-0" key={product.id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`http://127.0.0.1:8000/${product.product.image}/`}
                        className="img-fluid  p-3" alt="product image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-1">{product.product.name}</h5>
                        <p className="mb-0">{product.product.description}</p>
                        <p className='mb-0'>
                            <small>Quantity: {quantity}</small>
                        </p>
                        <p className='mb-0'>
                            <small>Price Per Item: {product.product.price}</small>
                        </p>
                        <p className='mb-3'>
                            <small>Total Price: {total_price}</small>
                        </p>
                        <div>
                            <button data-id={product.id} className='btn btn-primary' onClick={decrease_quantity}>-</button>
                            <button data-id={product.id} className='btn btn-primary ms-3' onClick={increase_quantity}>+</button>
                            <button data-id={product.id} className='btn btn-primary ms-4' onClick={remove_from_cart}>Remove from cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
