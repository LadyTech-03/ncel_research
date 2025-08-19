import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/sections/SectionWrapper';


const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Teams', href: '/teams' },
  { name: 'Projects', href: '/projects' },
];

const mediaDropdownItems = [
  { name: 'Research', href: '#research' },
  { name: 'News', href: '#news' },
  { name: 'Publications', href: '/publications' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <SectionWrapper>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="NCEL Logo" 
              className="h-auto w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary hover:text-primary-dark px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-muted rounded-md"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-primary hover:text-primary-dark px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-muted rounded-md"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Media Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setMediaDropdownOpen(true)}
                onMouseLeave={() => setMediaDropdownOpen(false)}
              >
                <button className="text-primary hover:text-primary-dark px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-muted rounded-md flex items-center">
                  Media
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {mediaDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-strong z-50">
                    {mediaDropdownItems.map((item) => (
                      item.href.startsWith('#') ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-primary hover:text-primary-dark px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-muted rounded-md items-center"
                      >
                        {item.name}
                      </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-primary hover:text-primary-dark px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-muted rounded-md items-center"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="hidden md:inline-flex bg-transparent border-primary text-primary text-base hover:bg-primary hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:bg-muted"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-muted rounded-lg mt-2">
              {navigationItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary hover:text-primary-dark block px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-background rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-primary hover:text-primary-dark block px-3 py-2 text-lg font-medium transition-all duration-300 hover:bg-background rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Media Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="text-lg font-medium text-muted-foreground mb-2 px-3">Media</div>
                {mediaDropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary hover:text-primary-dark block px-3 py-2 text-lg transition-all duration-300 hover:bg-background rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="w-full mt-2 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SectionWrapper>
    </nav>
  );
};