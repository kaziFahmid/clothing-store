"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="mt-32">
      <div className="text-center ">
        <h6 className="font-semibold mb-3">LET'S SEE</h6>
        <h1 className="font-thin text-black text-6xl">
          GALLERY OF THE VogueFusion
        </h1>
        <div className="text-black  mt-3 flex justify-center items-center  ">
          <button className="text-lg flex justify-center items-center">
            SHOP NOW <BsArrowRight className="hover:ms-3 duration-200" />
          </button>
        </div>
      </div>

      <div className="grid gap-2 mt-16 lg:grid-cols-6 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        <div data-aos="fade-down">
          <div className="h-72 mt-5">
            <Image
              src="https://images.unsplash.com/photo-1523260578934-e9318da58c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              width={500}
              height={500}
              className="w-full h-full object-cover "
              alt="women"
            />
          </div>
          <p className="font-normal mt-1">WOMEN</p>
        </div>

        <div data-aos="fade-down" className=" items-center gap-4 ">
          <div className=" w-full  h-80">
            <Image
              src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              width={500}
              height={500}
              alt="women"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-normal mt-1">WOMEN</p>
        </div>

        <div className=" lg:row-span-2 ">
          <div data-aos="fade-up" className=" mt-5 h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="men"
            />
          </div>
        </div>

        <div>
          <div data-aos="fade-down" className="mt-6">
            <Image
              src="https://images.unsplash.com/photo-1614495039368-525273956716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              width={500}
              height={500}
              alt="men"
            />
          </div>
          <p className="font-normal mt-1">MEN</p>
        </div>

        <div>
          <div data-aos="fade-right" className=" w-full  h-80">
            <Image
              src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              width={500}
              height={500}
              alt="men"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-normal mt-1">MEN</p>
        </div>

        <div>
          <div data-aos="fade-left" className="mt-5 ">
            <Image
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              width={500}
              height={500}
              alt="women"
            />
            <p className="font-normal mt-1">WOMEN</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="h-96 w-full object-cover">
            <Image
              src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              width={500}
              height={500}
              alt="women"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-normal mt-1">WOMEN</p>
        </div>

        <div>
          <div data-aos="fade-down">
            <Image
              src="  
            https://images.unsplash.com/photo-1599032909756-5deb82fea3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              width={500}
              height={500}
              alt="women"
            />
            <p className="font-normal mt-1">WOMEN</p>
          </div>

          <div data-aos="fade-up">
            <Image
              src="  
            https://images.unsplash.com/photo-1586078130702-d208859b6223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBmYXNoaW9ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              width={500}
              height={500}
              alt="women"
            />
            <p className="font-normal mt-1">WOMEN</p>
          </div>
        </div>

        <div data-aos="fade-left" className=" lg:col-span-3">
          <Image
            src="  
        https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width={500}
            height={500}
            alt="women"
          />
          <p className="font-normal mt-1">WOMEN</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
