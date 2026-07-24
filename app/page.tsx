import Hero from "@/components/Hero";
import FreshersBanner from "@/components/FreshersBanner";
import QuickAccess from "@/components/QuickAccess";
import Departments from "@/components/Departments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FreshersBanner />
      <QuickAccess />
      <Departments />
      <Footer />
    </>
  );
}