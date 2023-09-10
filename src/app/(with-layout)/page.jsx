import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import Gallery from "@/components/Gallery/Gallery";
import NewArrival from "@/components/NewArrival/NewArrival";
import Products from "@/components/Products/Products";


export default function Home() {
  return (
    <>
      <Banner/>
      <Category/>
   <Products/>
<NewArrival/>
<Gallery/>
    </>
  )
}
