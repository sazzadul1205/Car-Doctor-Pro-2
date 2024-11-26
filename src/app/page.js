import About from "@/Components/HomePager/About";
import Banner from "@/Components/HomePager/Banner";
import Contacts from "@/Components/HomePager/Contacts";
import Service from "@/Components/HomePager/Service";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contacts></Contacts>
    </div>
  );
}
