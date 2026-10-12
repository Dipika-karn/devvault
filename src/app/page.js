import Navbar from "../components/landing/Navbar";
import Hero from "../components/Hero/Hero"
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import ProblemSolution from "@/components/ProblemSolution/ProblemSolution";
import Features from "@/components/Features/Features";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProblemSolution/>
      < Features />
      <HowItWorks />
      <Testimonials />

    </>
  );
}