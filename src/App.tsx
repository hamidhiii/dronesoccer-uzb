import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import OurTeam from "./components/OurTeam/OurTeam";
import Navbar from "./components/Navbar/Navbar";
import GalleryCarousel from "./components/Galery/Galery";
import MerchSection from "./components/Merch/Merch";
import ContactSection from "./components/Cintact/ContactSection";

export default function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <OurTeam/>
    <GalleryCarousel/>
    <MerchSection/>
    <ContactSection/>
    </>
  )
}
