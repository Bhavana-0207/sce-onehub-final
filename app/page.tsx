import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CampusHighlights from "@/components/CampusHighlights";
import QuickAccess from "@/components/QuickAccess";
import Departments from "@/components/Departments";
import FacultyDirectory from "@/components/FacultyDirectory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickAccess />
      <Stats />
      <CampusHighlights />
      <Departments />
      <FacultyDirectory />
      <Footer />
    </>
  );
}