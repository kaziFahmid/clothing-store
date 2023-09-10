"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Banner = () => {
  useEffect(()=>{
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
   },[])
  return (
    <>
  <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full bg-[url(https://i.ibb.co/2t90rfL/pexels-andrea-piacquadio-842811-min.jpg)] bg-center bg-cover bg-no-repeat h-[520px] flex justify-center items-center">
<div className=" max-w-6xl">
  <h1 data-aos="fade-down" className="text-white text-6xl font-semibold">Discover the Latest Fashion Trends</h1>
  <p  data-aos="fade-right" className="text-white text-justify mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.</p>
  <div className="mt-3">
    <button data-aos="fade-up"className="btn bg-red-900 w-48 rounded-none border-none text-white">Explore</button>
  </div>
</div>
    <div className="absolute flex justify-center gap-5 transform  left-5 right-5 top-3/4">
      <a href="#slide3" className="btn rounded-none btn-square bg-black text-white border-none">❮</a> 
      <a href="#slide2" className="btn rounded-none btn-square  bg-black text-white border-none">❯</a>
    </div>

  
  </div> 


  <div id="slide2" className="carousel-item relative w-full bg-[url(https://i.ibb.co/Lz3Q2hM/freestocks-3-Q3ts-J01nc-unsplash-min-2.jpg)] bg-center bg-cover bg-no-repeat h-[520px] flex justify-center items-center">
  <div className=" max-w-6xl">
  <h1  className="text-white text-6xl font-semibold ">Fashion Forward and Fabulous</h1>
  <p  className="text-white text-justify mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.</p>
  <div className=" mt-3">
    <button className="btn bg-red-900  w-48 rounded-none border-none text-white">Explore</button>
  </div>
  
</div>
    <div className="absolute flex justify-center gap-5 transform  left-5 right-5 top-3/4">
      <a href="#slide1" className="btn rounded-none  btn-square bg-black text-white border-none ">❮</a> 
      <a href="#slide3" className="btn rounded-none  btn-square bg-black text-white border-none">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full bg-[url(https://i.ibb.co/XXG7LFJ/pexels-iiii-iiii-69212-min.jpg)] bg-center bg-cover bg-no-repeat h-[520px] flex justify-center items-center">
  <div className=" max-w-6xl">
  <h1  className="text-white  text-6xl font-semibold">Dress to Impress Every Day</h1>
  <p className="text-white text-justify mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet consequuntur molestiae maxime, eaque praesentium fugiat? Molestiae.</p>
  

  <div className="mt-3">
    <button className="btn bg-red-900 border-none rounded-none text-white w-48">Explore</button>
  </div>
</div>
    <div className="absolute flex justify-center gap-5 transform  left-5 right-5 top-3/4">
      <a href="#slide2" className="btn rounded-none btn-square bg-black text-white border-none">❮</a> 
      <a href="#slide1" className="btn rounded-none btn-square bg-black text-white border-none">❯</a>
    </div>
  </div> 
 
</div>
    </>
  )
}

export default Banner
