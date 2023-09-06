import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar  bg-white text-neutral-content flex justify-around items-center">
 <div>
 <a className=" text-black normal-case text-xl">daisyUI</a>
 </div>
 <ul className='flex gap-6 justify-center items-center text-center text-black cursor-pointer'>
    <li>HOME</li>
    <li>SHOP</li>
    <li>MEN</li>
    <li>WOMEN</li>
    <li>ORDERS</li>
    <li>ABOUT</li>
    <li>CONTACT US</li>
 </ul>
<div>
    <ul className='flex justify-center items-center text-black gap-5'>
        <li>asdf</li>
        <li>sadfsdaf</li>
    </ul>
</div>
  </div>
  )
}

export default Navbar
