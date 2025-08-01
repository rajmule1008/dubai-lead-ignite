import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrategyShowcase from "@/components/PropertyShowcase";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero />
        <StrategyShowcase />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
