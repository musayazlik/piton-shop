import React from 'react'
import Navbar from '@components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Products = ({ products }: any) => {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 px-4 mb-20'>
          {products.products.map((product: any) => (
            <Link href={`product-detail/${product.id}`} key={product.id}>
              <div
                key={product.id}
                className='bg-white shadow-xl rounded-lg p-4 '>
                <div className='relative w-full h-60 mb-6'>
                  <Image
                    src={`https://assignment-api.piton.com.tr${product.image}`}
                    alt={product.name}
                    fill
                    objectFit='cover'
                    quality={80}
                  />
                </div>
                <h2 className='font-bold text-xl'>{product.name}</h2>
                <p className='text-gray-400'>{product.description}</p>
                <p className='font-bold text-xl'>{product.price} TL</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products

export const getServerSideProps = async (content: any) => {
  const token = content.req.cookies.token

  if (!token) {
    return {
      redirect: {
        destination: '/login-register',
        permanent: false,
      },
    }
  }

  const res = await fetch(
    'https://assignment-api.piton.com.tr/api/v1/product/all',
    {
      method: 'GET',
      headers: {
        'access-token': `${token}`,
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return {
    props: {
      products: res,
    },
  }
}
