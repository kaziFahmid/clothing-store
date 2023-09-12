import React from 'react'
import Image from 'next/image'

const ProductCard = ({_id,name,picture,category,email,description,price}) => {
  return (
    <div className='min-h-[500px] mt-3 border-b border-gray-400 pb-2 '>
    <div className='h-[450px]'>
    <Image className='w-full h-full object-cover'  width={500} height={500} src={picture} alt={category}/>
    </div>
 <div className='text-justify'>
 
 <h2 className='font-medium text-xl mt-3'>{name}</h2>
 <small className='font-medium'>{category}</small>

<p className='mt-3'>{description} </p>
 <div className='flex justify-between items-center mt-3'>
        <h5 className='font-semibold text-red-900'>${price}</h5>
        <p className="font-bold  text-base relative  one cursor-pointer">
  <span>Buy Now</span>
  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>
</p>

    </div>






 </div>
</div>
  )
}

export default ProductCard
