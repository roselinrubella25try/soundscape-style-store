import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const navItems = [
    { label: "Shop", href: "#shop" },
    { label: "Support", href: "#support" },
    { label: "Gift Guide", href: "#gifts", accent: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">b</span>
            </div>
            <span className="ml-2 text-xl font-bold tracking-tight hidden sm:block">
              Beats
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.accent ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64 bg-secondary border-none"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="hover-lift">
              <Search className="h-5 w-5 lg:hidden" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover-lift">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        item.accent ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Input
                      placeholder="Search products..."
                      className="bg-secondary border-none"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;