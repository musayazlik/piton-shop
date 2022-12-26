import React from 'react'
import Navbar from '@components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import Swal from 'sweetalert2'

const Products = ({ products }: any) => {
  const router = useRouter()
  const likeHandle = async (id: number, likes: number) => {
    const token = document.cookie.split('=')[1]
    const res = await fetch(
      `https://assignment-api.piton.com.tr/api/v1/product/like/`,
      {
        method: 'POST',
        body: JSON.stringify({
          productId: id,
        }),
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${token}`,
        },
      }
    )
    const data = await res.json()
    Swal.fire({
      icon: 'success',
      title: 'Liked',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 px-4 mb-20'>
          {products.products.map((product: any) => (
            <div
              key={product.id}
              className='bg-white border-2 p-4 pt-12 relative rounded-[40px] flex flex-col justify-between max-w-sm mx-auto'>
              <div
                className='like  mb-4 absolute right-7 top-3'
                onClick={() => likeHandle(product.id, product.likes)}>
                <Icon icon='flat-color-icons:like' className='' fontSize={28} />
              </div>
              <Link href={`product-detail/${product.id}`} key={product.id}>
                <div className='relative w-full h-60 mb-6'>
                  <Image
                    src={`https://assignment-api.piton.com.tr${product.image}`}
                    alt={product.name}
                    fill
                    className='object-contain'
                    quality={80}
                  />
                </div>

                <h2 className='font-bold text-xl text-center mb-8'>
                  {product.name}
                </h2>
              </Link>
              <div>
                <hr className='h-1 bg-gray-300/50' />
                <p className='font-bold text-2xl mt-4 text-center text-blue-600 py-4'>
                  {product.price} TL
                </p>
              </div>
            </div>
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
