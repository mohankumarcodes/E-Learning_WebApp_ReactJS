import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";


function App() {

  return (
    <main className="overflow-x-hidden text-dark  bg-white">
   
      <Hero/>
      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>
    </main>

  )
}

export default App
