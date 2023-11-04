import { useContext, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";
import {
  Nav,
  Hero,
  Statistics,
  About,
  Expertise,
  Contact,
  Footer,
} from "./components/page";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { isNavOpen } = useContext(AppContext);
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.toggle("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);
  return (
    <>
      <section className="font-Montserrat overflow-x-hidden text-white bg-black">
        <div className="min-h-screen">
          <Nav />
          <Hero />
        </div>
        <Statistics />
        <About />
        <Expertise />
        <Contact />
        <Footer />
      </section>
      <MobileMenu />
    </>
  );
}

export default App;
