'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Education />
    <Experiences />
    <Contact />
    <Footer />
    </>
  );
}
