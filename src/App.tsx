
import { useState} from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero";
import Technologies from "./components/technologyies/Technologies"
import type { Technology } from "./types/Technology"
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";




const TechnologiesFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();

  return data;
};
function App() {
  const [selectedTechnologies, setSelectedTechnologies] =
  useState<Technology[]>([]);
  const [technologiesPromise]=useState(() =>TechnologiesFetch());

  return (
    <>
   
     <Nav />
<Hero/>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies
  technologiesPromise={technologiesPromise}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
/>
      </Suspense>
    <ToastContainer />
    <Footer/>
    </>
  )
}

export default App
