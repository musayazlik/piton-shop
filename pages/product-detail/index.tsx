import Navbar from '@components/navbar'
import Image from 'next/image'
import React from 'react'

const ProductDetail = ({ product }: any) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='context'>
          <div className='product'>
            <div className='product-image '>
              <Image
                src={`https://assignment-api.piton.com.tr${product.image}`}
                alt={product.name}
                width={300}
                height={300}
              />
            </div>
            <div className='product-details'>
              <h1 className='product-title'>{product.name}</h1>
              <p className='product-description'>{product.description}</p>
              <p className='product-price'>{product.price}</p>
              <button className='btn btn-primary product-button' type='button'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

export const getServerSideProps = async (context: any) => {
  const token = context.req.cookies.token
  const id = context.params.id
  const res = await fetch(
    `https://assignment-api.piton.com.tr/api/v1/product/get/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': `${token}`,
      },
    }
  )
  const data = await res.json()

  return {
    props: {
      product: data.product,
    },
  }
}
