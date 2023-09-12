import React from "react";

const Contactus = () => {
  return (
    <section className="lg:h-screen flex justify-center items-center" >
  <div className="grid lg:grid-cols-2 lg:gap-44 grid-cols-1 ">



  <div className="flex justify-center items-center">
    <div>
    <div>
          <h1 className="font-semibold">RETURN ADDRESS FOR ONLINE ORDERS:</h1>
          <p>2600 Pennsylvania Ave NW, Washington, DC 20500</p>
        </div>

        <div className="mt-5">
          <h1 className="font-semibold">PHONE NUMBER:</h1>
          <p className="underline text-red-900">012-345-6789</p>
        </div>

        <div className="mt-5">
          <h1 className="font-semibold">EMAIL ADRESS:</h1>
          <p className="underline text-red-900">contact@VogueFusion.com</p>
        </div>

        <div className="mt-5">
        <h1 className="font-semibold"> OPENING HOURS:</h1>

<p>Mon-Sat: 10:00am - 8:00pm</p>
<p>Sun: 11:00am - 9:00pm</p>
        </div>
    </div>


      </div>

      <div >
        <h1 className="text-4xl font-thin text-center mb-5">CONTACT US</h1>
        <div>

    <div>
    <label className="mb-2">Name</label><br></br>
    <input type="text" placeholder='Name' className="border border-black w-full py-3 ps-5"/>
    </div>
    <div className="mt-3">
    <label className="mb-2">Email</label><br></br>
    <input type="email" placeholder='Email' className="border border-black w-full py-3 ps-5"/>
    </div>
    <div className="mt-3">
    <label className="mb-2">Message</label><br></br>
  <textarea className="border border-black w-full h-32 ps-5 pt-3" placeholder="Message"></textarea>
    </div>

    <div className="mt-3">
<button className="bg-black text-white w-full btn rounded-none">Submit</button>
    </div>






















        </div>
     
      </div>








  </div>
    </section>
  );
};

export default Contactus;
