import { Battery, Headphones, Smartphone, Wifi } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Up to 9 hours of listening time with additional charges from the case.",
    },
    {
      icon: Wifi,
      title: "Class 1 Bluetooth",
      description: "Extended range and fewer dropouts for seamless connectivity.",
    },
    {
      icon: Headphones,
      title: "Noise Cancelling",
      description: "Pure ANC for immersive sound and focused listening experience.",
    },
    {
      icon: Smartphone,
      title: "Hey Siri Ready",
      description: "Voice activation for hands-free control and seamless integration.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail engineered for the ultimate audio experience, 
            from studio to street.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-card-gradient p-8 lg:p-12 rounded-2xl shadow-premium">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Experience the Difference
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Try our products risk-free with our 30-day return policy and 
              discover why millions choose Beats.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-lift hover-glow transition-all">
              Find Your Perfect Fit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;