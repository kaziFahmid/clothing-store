
import React from 'react'
import Title from '../Title/Title'
import ProductCard from './ProductCard/ProductCard'

const Products =async () => {
 const response = await fetch('https://clothing-store-pearl.vercel.app/api/products',{cache:"no-store"});
    const products = await response.json();

  return (
    
    <section className='mt-32'>
        <div >
        <Title title="ALL PRODUCTS"/></div>
        <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-3  mt-8 mx-auto'>
          {products.map((product)=><ProductCard key={product?._id} {...product}/>)}



        </div>
      
    </section>
  )
}

export default Products
