import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product._id}`}>
        <div className='product-cover'>
          <img src={product.photo} alt='' />
          <span className='productname'>{product.productName}</span>
          <span className='productprice'>Rs.{product.price}</span>
          {product.discountPercent && (
            <div className='price-calculate'>
              <span className='previousPrice'>
                Rs.
                {Math.floor(
                  (product.price * 100) / (100 - product.discountPercent)
                )}
              </span>
              <span className='dpercent'>-{product.discountPercent}%</span>
            </div>
          )}
          <div className='reviews-section'>
            <span className='star-section'>
              <Rating value={product.noofstars} />
            </span>
            <span className='reviewsno'>({product.noofReviews})</span>
          </div>
        </div>
      </Link>
    
    </div>
  )
}

export default Product
