import ProductCard from "@/components/ui/product-card";
import headphonesPro from "@/assets/headphones-pro.jpg";
import earbudsPro from "@/assets/earbuds-pro.jpg";
import speakerPro from "@/assets/speaker-pro.jpg";

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      title: "Powerbeats Pro 2",
      price: "$249.99",
      originalPrice: "$299.99",
      image: earbudsPro,
      badge: "Best Seller",
      isNew: true,
    },
    {
      id: 2,
      title: "Beats Studio Pro",
      price: "$349.99",
      image: headphonesPro,
      badge: "Premium",
    },
    {
      id: 3,
      title: "Beats Pill",
      price: "$149.99",
      originalPrice: "$199.99",
      image: speakerPro,
      badge: "Portable",
    },
    {
      id: 4,
      title: "Beats Solo 4",
      price: "$199.99",
      image: headphonesPro,
      isNew: true,
    },
    {
      id: 5,
      title: "Powerbeats Pro",
      price: "$199.99",
      originalPrice: "$249.99",
      image: earbudsPro,
      badge: "Sale",
    },
    {
      id: 6,
      title: "Beats Flex",
      price: "$69.99",
      image: earbudsPro,
      badge: "Entry Level",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Popular Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, crafted for superior sound quality 
            and unmatched performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover-lift hover-glow transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;