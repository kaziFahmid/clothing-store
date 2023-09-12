import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import Gallery from "@/components/Gallery/Gallery";
import MensCollections from "@/components/MensCollections/MensCollections";
import NewArrival from "@/components/NewArrival/NewArrival";
import Products from "@/components/Products/Products";

import WomensCollections from "@/components/WomensCollections/WomensCollections";


export default function Home() {
  return (
    <>
      <Banner/>

      <Category/>
   <Products/>
   <MensCollections/>
   <WomensCollections/>
<NewArrival/>
<Gallery/>

    </>
  )
}
