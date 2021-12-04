import React from 'react'
import './Product.css'
function Product({ id, title, prize, rating, image }) {
    return (
        <div className="product">
            <div className="product-Info">
                <p>{title}</p>
                <p className="product-prize">
                    <small>$</small>
                    <strong>{prize}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}


                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
