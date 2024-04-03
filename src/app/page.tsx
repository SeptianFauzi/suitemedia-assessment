import Image from "next/image";
import Header from "./components/Header";
import PetOverView from "./components/PetOverView";
import PetBanner from "./components/PetBanner";
import PetKnowledge from "./components/PetKnowledge";
import Footer from "./components/Footer";
import PetToys from "./components/PetToys";
import PetSellers from "./components/PetSellers";
import AdoptionBanner from "./components/AdoptionBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="desktop2k:px-[130px] desktop:px-[80px] px-[14px]">
        <PetOverView />
        <PetBanner />
        <PetToys />
        <PetSellers />
        <AdoptionBanner />
        <PetKnowledge />
      </main>
      <Footer />
    </div>
  );
}
