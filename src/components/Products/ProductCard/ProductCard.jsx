import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className='min-h-[500px] '>
    <div>
    <Image className='h-auto w-full' width={500} height={500} src='https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' alt='products'/>
    </div>
 <div className='text-justify'>
 
 <h2 className='font-medium text-xl mt-3'>oldjhfflasdfjlkasdfjasdlkdf</h2>

<p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil culpa alias suscipit voluptatum </p>
 <div className='flex justify-between items-center mt-3'>
        <h5>asdfasdfadsf</h5>
        <p className="font-bold  text-xl relative  one cursor-pointer">
  <span>Buy Now</span>
  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>
</p>

    </div>






 </div>
</div>
  )
}

export default ProductCard
