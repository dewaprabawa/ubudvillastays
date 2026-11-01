import { Amenities } from "@/components/Amenities";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Reserve } from "@/components/Reserve";
import { Reviews } from "@/components/Reviews";
import { Spaces } from "@/components/Spaces";
import { Story } from "@/components/Story";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Spaces />
        <Amenities />
        <Location />
        <Reviews />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
