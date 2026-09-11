
import { useState } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero";
import Technologies from "./components/technologyies/Technologies"
import type { Technology } from "./types/Technology"
import { Suspense } from "react";


const TechnologiesFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();

  return data;
};
function App() {
  const [technologiesPromise]=useState(() =>TechnologiesFetch());

  return (
    <>
   
     <Nav />
<Hero/>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      
    </>
  )
}

export default App
