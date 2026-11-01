import { Footer } from "@/components/Footer";
import { GuidesTeaser } from "@/components/GuidesTeaser";
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
        <GuidesTeaser />
        <Location />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
