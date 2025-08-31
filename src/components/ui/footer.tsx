import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Headphones", href: "#" },
        { label: "Earbuds", href: "#" },
        { label: "Speakers", href: "#" },
        { label: "Accessories", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Customer Service", href: "#" },
        { label: "Product Registration", href: "#" },
        { label: "Warranty", href: "#" },
        { label: "Returns", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Beats", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Investors", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Newsletter", href: "#" },
        { label: "Community", href: "#" },
        { label: "Events", href: "#" },
        { label: "Partners", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">b</span>
                </div>
                <span className="ml-3 text-2xl font-bold tracking-tight">
                  Beats
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Premium audio experiences that fuel the passion of music lovers 
                and creators worldwide.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-lift"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Beats Electronics LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;