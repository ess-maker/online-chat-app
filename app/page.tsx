import Footer from "@/components/commen/Footer";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import Product from "@/components/home/Products";
import Categorys from "@/components/mainPage/Categorys";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categorys />
    <Product />
    <Footer />
    </>
  )
}
