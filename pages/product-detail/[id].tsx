import Navbar from '@components/navbar'
import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Head from 'next/head'

const ProductDetail = ({ product }: any) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name='description' content={product.description} />
        <meta name='author' content='Musa Yazlık' />
      </Head>

      <Navbar />
      <div className='container mx-auto'>
        <div className='context'>
          <div className='product border-2 sm:px-12 py-10 rounded-2xl mx-6 mb-8'>
            <div className='likes'>
              <div className='like flex justify-between mb-4 gap-3 item-center flex-col sm:flex-row px-6 sm:px-0'>
                <Link
                  href='/products'
                  className='bg-blue-600 px-4 py-3 text-white font-semibold flex  justify-center items-center gap-3 rounded-lg'>
                  <Icon icon='ic:outline-keyboard-arrow-left' fontSize={24} />
                  Back to products
                </Link>
                <div className='flex justify-center items-center gap-3'>
                  <p className='mt-1'>{product.likes.length} likes </p>
                  <Icon
                    icon='flat-color-icons:like'
                    className='text-gray-400 cursor-pointer '
                    fontSize={28}
                  />
                </div>
              </div>
            </div>
            <div className=' sm:grid grid-cols-12 gap-8 space-y-6 sm:space-y-0 '>
              <div className='product-image col-span-12 sm:col-span-3 mx-auto relative w-full h-[300px]'>
                <Image
                  src={`https://assignment-api.piton.com.tr${product.image}`}
                  alt={product.name}
                  fill
                  className='object-contain'
                />
              </div>
              <div className='product-details col-span-12 sm:col-span-9 flex flex-col justify-between items-end'>
                <div>
                  <h1 className='product-title font-medium text-2xl sm:text-4xl mb-4 px-6 sm:px-0'>
                    {product.name}
                  </h1>
                  <p className='product-description text-lg sm:text-xl px-6 sm:px-0'>
                    {product.description}
                  </p>
                </div>
                <p className='product-price bg-blue-600 text-white pl-12 pr-16 rounded-tl-[60px] rounded-bl-[60px] text-5xl font-bold py-4 sm:translate-x-12 mt-6 sm:mb-4 flex justify-start items-center gap-3'>
                  {product.price} <Icon icon='fa:turkish-lira' fontSize={36} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

export const getServerSideProps = async (context: any, params: any) => {
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
