import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SecuritySection from '@/components/SecuritySection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <UseCasesSection />
        <PricingSection />
        <TestimonialsSection />
        <SecuritySection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  )
}