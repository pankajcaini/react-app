import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function AProduct({product}) {
    const [product_id, set_product_id]  = useState("")

    useEffect(function(){
        set_product_id(product.id)
    },[])


    return <div className='col-sm-3'>
        <div className="card mt-5 shadow-sm p-2 border-0">
            <img src={product.image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text mb-0">
                        {product.description}
                    </p>
                    <p>
                        <span>Price </span>
                        <span>{product.price}</span>
                    </p>
                    <NavLink className="btn btn-primary" to={`/product/${product_id}`}>Go to product</NavLink>
                </div>
        </div>
    </div>
}
