
import { Navbar } from './components/layout/Navbar/Navbar';
import { HeroSection } from './components/sections/Hero/HeroSection';
import { TrustedBySection } from './components/sections/TrustedBy/TrustedBySection';
import { ProcessSection } from './components/sections/Process/ProcessSection'; 
import { PortfolioSection } from './components/sections/Portfolio/PortfolioSection';
import { CapabilitiesSection } from './components/sections/Capabilities/CapabilitiesSection';
import { BenefitsSection } from './components/sections/Benifits/BenefitsSection';
import { TestimonialSection } from './components/sections/Testimonial/TestimonialSection';
import { PricingSection } from './components/sections/Pricing/PricingSection';
import { BlogSection } from './components/sections/Blog/BlogSection';
import { FAQSection } from './components/sections/FAQ/FAQSection';
import { Footer } from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProcessSection /> 
        <PortfolioSection/>
        <CapabilitiesSection/>
        <BenefitsSection/>
        <TestimonialSection/>
        <PricingSection/>
        <BlogSection/>
        <FAQSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;