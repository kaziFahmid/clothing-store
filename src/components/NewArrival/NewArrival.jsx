"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const NewArrival = () => {

 useEffect(()=>{
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
   },[])
  return (
    <section className=" relative mt-32">
      <div className="grid relative lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        <div>
          <div data-aos="fade-up">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              width={500}
              height={500}
              alt="girl"
            />
          </div>
          <div data-aos="fade-right" className="z-50">
            <h1 className="text-black text-3xl font-semibold mt-4">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              facere ipsa fugit aliquid? Mollitia, provident quisquam. Odit
              doloribus ducimus labore officiis rem voluptatibus quasi numquam
              placeat reprehenderit 
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center">
          <div data-aos="fade-down">
            <Image
              src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1962&q=80"
              width={500}
              height={500}
              alt="girl"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 data-aos="zoom-in" className="text-9xl font-bold">
          New<br />
          Arrival
        </h1>
      </div>
    </section>
  );
};

export default NewArrival;
