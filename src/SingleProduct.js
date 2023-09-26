import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'



export default function SingleProduct({ set_is_logged_in, is_logged_in }) {

    const user_id = localStorage.getItem('USER_ID')

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [show_add_to_cart_btn, set_show_add_to_cart_btn] = useState(false)



    useEffect(function () {
        async function fetch_single_record() {
            const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)
            setProduct(response.data)
        }
        fetch_single_record()
    }, [])


    useEffect(function(){
        async function check_product_in_cart(){
            const response = await axios(`http://127.0.0.1:8000/check_product_in_cart/${id}/${user_id}/`)
            const res = response.data.status
            if(res == "yes"){
                set_show_add_to_cart_btn(false)
            }else{
                set_show_add_to_cart_btn(true)
            }
        }
        check_product_in_cart()
    },[])


    async function add_to_cart(){
        await axios(`http://127.0.0.1:8000/add_to_cart/${user_id}/${id}/`)
        set_show_add_to_cart_btn(false)
    }



    return <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-sm-5'>
                <div className='text-center'>
                    <img src={product.image} alt="" className='img-fluid' />
                </div>
                <div className='text-center mt-4'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price - {product.price}</p>
                    <p>Discount - {product.discount}</p>
                    <p>Brand - {product.brand}</p>
                </div>
                {
                    is_logged_in ? 
                    (show_add_to_cart_btn ? <div className='d-flex justify-content-evenly mt-5'>
                    <button className='btn btn-primary p-2 ps-3 pe-3 fw-bold shadow-sm' onClick={add_to_cart}>Add to Cart</button>
                </div> : null)
                    : <div className='d-flex justify-content-evenly mt-5'>
                        <NavLink className='btn btn-primary p-2 ps-3 pe-3 fw-bold shadow-sm' to="/login" >Login to make puchase</NavLink>
                    </div>
                }
            </div>
        </div>
    </div>

}
