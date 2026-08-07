import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import PartnerBanks from '@/components/sections/PartnerBanks';
import Services from '@/components/sections/Services';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Industries from '@/components/sections/Industries';
import DigitalBusinessCard from '@/components/sections/DigitalBusinessCard';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import AboutUs from '@/components/sections/AboutUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Sticky Blur Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <PartnerBanks />
        <Services />
        <ProcessTimeline />
        <WhyChooseUs />
        <Industries />
        <DigitalBusinessCard />
        <Testimonials />
        <FAQ />
        <AboutUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
