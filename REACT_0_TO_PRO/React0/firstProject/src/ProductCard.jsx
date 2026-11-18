import React from 'react'

const ProductCard = ({product, del}) => {
  return (
    <div>
      <div className='product-card'>
        <img src={product.image} alt="Product" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price.toFixed(2)}</p>
        <button style={{ backgroundColor: 'red', color: 'white', border: 'none',borderRadius: '1rem', padding: '0.5rem' }} onClick={() => del(product.id)}>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default ProductCard
