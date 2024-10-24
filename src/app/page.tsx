import Image from "next/image";
import Nav from "../app/components/nav";
import Hero from "./components/hero";

import Button from "./components/button";

export default function Home() {
  return (
    <div className="h-14 bg-white">
      <Nav />
      <Hero />
      <div className=" flex mt-1 py-2 px-20 ">     
         <Button />
         </div>

     </div>

    
  );
}
