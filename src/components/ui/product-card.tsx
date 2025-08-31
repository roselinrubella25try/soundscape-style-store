import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  isNew?: boolean;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  badge, 
  isNew 
}: ProductCardProps) => {
  return (
    <Card className="group bg-card border-border hover-lift overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          {/* Badges */}
          {(badge || isNew) && (
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {isNew && (
                <Badge className="bg-primary text-primary-foreground">
                  New
                </Badge>
              )}
              {badge && (
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {badge}
                </Badge>
              )}
            </div>
          )}

          {/* Product Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
            >
              Quick View
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-foreground">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <Button 
            variant="outline" 
            className="w-full border-border hover:border-primary hover:text-primary transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;