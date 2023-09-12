
import React from 'react'
import Image from "next/image";

import MensCollections from '@/components/MensCollections/MensCollections';
const Men =  () => {

  

  return (
    <section>
    <div className="grid grid-cols-3 max-w-6xl mx-auto gap-4">
      <div >
        <div >
          <Image
            src="https://i.pinimg.com/736x/6e/1c/3b/6e1c3b4f5a58690f9c35c2caf58c678a--guys-in-suits-mens-suits.jpg"
            width={500}
            height={500}
            alt="men" 
            priority
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-between items-center flex-col">
        <div className="h-28 w-full">
          <Image
            src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            width={500}
            height={500}
            alt="men"
            priority
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-9xl text-center font-semibold text-black">
            MEN
          </h1>
          <p className="text-2xl font-light">Collections</p>
        </div>

        <div className="h-28 w-full">
          <Image
            src="https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width={500}
            height={500}
            priority
            alt="men"
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
      </div>

      <div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            width={500}
            height={500}
            priority
            alt="men"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>

<MensCollections/>
      </section>
  )
}

export default Men
