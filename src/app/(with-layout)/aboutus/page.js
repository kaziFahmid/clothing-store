import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section>
        <div className=' h-[538px] flex justify-center items-center bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-center bg-cover bg-no-repeat'>
<div className='text-center'>
    <h1 className='text-9xl text-gray-300 font-thin'>ABOUT US</h1>
    </div>
        </div>
<div className='text-center max-w-4xl mx-auto mt-32'>
    <h5 className='text-xl font-bold'>VogueFusion, THE NEW ERA BEGINS!</h5>      
<h1 className='text-4xl font-light mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat culpa totam sit dolorem a rerum quasi nam!</h1>
<p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ut est quisquam, laboriosam, temporibus sed veniam error molestias ducimus esse alias nisi? Corporis eligendi est amet, provident sit laboriosam modi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ut est quisquam, laboriosam, temporibus sed veniam error molestias ducimus esse alias nisi? Corporis eligendi est amet, provident sit laboriosam modi?</p>
</div>

<div className='grid grid-cols-2 max-w-6xl mx-auto mt-44'>
   <div>
    <p className='text-4xl font-light'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta magnam fugiat ullam saepe accusamus quasi. Rerum facere laborum quos nulla.
    
    </p>
    </div>
   <div>
   <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a quidem ipsa at iure ipsam accusantium in reiciendis voluptatem exercitationem, dicta quae optio repellendus voluptas nesciunt sit maiores non molestiae id corrupti distinctio maxime natus.
    
    </p>
   </div>
</div>

<div className='w-full  mt-32'>
    <Image src='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' width={500} height={500} alt='girl' className='w-full h-full object-bottom object-cover'/>
</div>


    </section>
  )
}

export default AboutUs
