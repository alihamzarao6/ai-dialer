import Navbar from "@/components/homepage/Navbar";
import Hero from "@/components/homepage/Hero";
import TrustedBy from "@/components/homepage/TrustedBy";
import HowItWorks from "@/components/homepage/HowItWorks";
import Features from "@/components/homepage/Features";
import Integrations from "@/components/homepage/Integrations";
import UseCases from "@/components/homepage/UseCases";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import CTA from "@/components/homepage/CTA";
import Footer from "@/components/homepage/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Layered background effects */}
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Features />
        <Integrations />
        <UseCases />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
