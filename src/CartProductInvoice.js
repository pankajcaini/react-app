

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CartProductInvoice() {

    const user_id = localStorage.getItem('USER_ID')
    const [products, setProducts] = useState([])
    const [total_payable_ammount, set_total_payable_ammount] = useState(0)
 


    useEffect(function () {
        async function fetch_product() {
            const response = await axios(`http://127.0.0.1:8000/CartProductInvoice/${user_id}/`)
            setProducts(response.data.cart_products)
            set_total_payable_ammount(response.data.total_payable_ammount)
        }
        fetch_product()

    
    }, [])



    function map_callback(product) {
        return <tr>
            <td>{product.product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.product.price}</td>
            <td>{product.quantity * product.product.price}</td>
        </tr>
    }



    return <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-sm-8'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price Per Item</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(map_callback)}
                    </tbody>
                </table>
            </div>
            <div className='row mt-5 justify-content-center'>
                <div className='col-12'>
                    <p className="text-center">Delivery Charge : FREE </p>
                    <p className="text-center">Total Payable Ammount : {total_payable_ammount+400}</p>
                </div>
            </div>
            <div className='row mt-3 justify-content-center'>
                <div className='col-1'>
                    <button className='btn btn-primary'>Proceed</button>
                </div>
            </div>
        </div>
    </div>
}
