export const dynamic = "force-dynamic"; //for vercel deployment

import About from "@/Components/HomePager/About";
import Banner from "@/Components/HomePager/Banner";
import Contacts from "@/Components/HomePager/Contacts";
import CoreFeatures from "@/Components/HomePager/CoreFeatures";
import Products from "@/Components/HomePager/Products";
import Service from "@/Components/HomePager/Service";
import Team from "@/Components/HomePager/Team";
import Testimonials from "@/Components/HomePager/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contacts></Contacts>
      <Products></Products>
      <Team></Team>
      <CoreFeatures></CoreFeatures>
      <Testimonials></Testimonials>
    </div>
  );
}
