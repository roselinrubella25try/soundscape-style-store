import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ProductsGrid from "@/components/ui/products-grid";
import FeaturesSection from "@/components/ui/features-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductsGrid />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
