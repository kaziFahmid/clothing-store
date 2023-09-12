import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="navbar  bg-white text-neutral-content flex justify-around items-center">
      <div>
        <a className=" text-black normal-case text-xl font-bold">VogueFusion</a>
      </div>
      <ul className="flex gap-6 justify-center items-center text-center text-black cursor-pointer">
        <li className="  relative  one">
       <Link href='/'>HOME</Link>
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>
        </li>
        <li className="  relative  one">
          SHOP{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
      <Link href='/men'>
      <li className="  relative  one">
          MEN{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
      </Link>
   <Link href='/women'>
   <li className="  relative  one">
          WOMEN{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
   </Link>
        <li className="  relative  one">
          ORDERS{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
        <li className="  relative  one">
          <Link href='/aboutus'>ABOUT</Link>{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
   <Link href='/contactus'>
   <li className="  relative  one">
          CONTACT US{" "}
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-900"></span>{" "}
        </li>
   </Link>
      </ul>
      <div>
        <ul className="flex justify-center items-center text-black gap-5">
          <li>asdf</li>
          <li>
            <AiOutlineShoppingCart className="text-xl" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
