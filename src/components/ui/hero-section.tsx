import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAthlete}
          alt="Professional athlete with premium wireless earbuds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full min-h-[90vh] flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Powerbeats Pro 2
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-light">
            Featuring Professional Athletes
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Experience unparalleled sound quality and performance with our latest 
            wireless earbuds designed for champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold hover-lift hover-glow"
            >
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-semibold hover-lift"
            >
              Learn More
            </Button>
          </div>

          {/* Price */}
          <div className="mt-8">
            <span className="text-2xl font-bold text-primary">$249.99</span>
            <span className="text-lg text-muted-foreground ml-2">Starting at</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;