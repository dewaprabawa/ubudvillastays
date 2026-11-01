import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeHero } from "@/components/HomeHero";
import { Location } from "@/components/Location";
import { Reserve } from "@/components/Reserve";
import { VillaGrid } from "@/components/VillaGrid";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HomeHero />
        <VillaGrid />
        <Location />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
