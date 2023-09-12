"use client"
import React, { useEffect } from "react";
import Title from "../Title/Title";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Category = () => {
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
 <section className="mt-28">
    <div  data-aos="fade-down"> <Title  data-aos="fade-down" title="ALL CATEGORIES" /></div>
 
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-6xl    mx-auto ">
        <div className="    h-fit  group cursor-pointer">
          <div data-aos="zoom-in" className="relative  h-[500px]  ">
            <Image
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=800"
              alt="men"
            />

            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              <h1 className="text-6xl text-white">MEN</h1>
            </div>
          </div>
        </div>

        <div  className=" h-fit  group cursor-pointer">
          <div data-aos="zoom-in" className="relative   h-[500px]  ">
            <Image
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="women"
            />

            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-6xl text-white">WOMEN</h1>
            </div>
          </div>
        </div>
      </div>
 </section>
    </>
  );
};

export default Category;
