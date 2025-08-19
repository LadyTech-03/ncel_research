import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import SectionWrapper from '@/components/sections/SectionWrapper';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';


const navigationItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
];

const mediaDropdownItems = [
  { name: 'Research', href: '#research' },
  { name: 'News', href: '#news' },
  { name: 'Publications', href: '/publications' },
];

const teamDropdownItems = [
  { name: 'Project Leadership', href: '/teams#leadership' },
  { name: 'Co-Researchers', href: '/teams?tab=coResearchers#team-tabs' },
  { name: 'Co-Supervisors', href: '/teams?tab=coSupervisors#team-tabs' },
  { name: 'Postgraduate Students', href: '/teams?tab=postgraduateStudents#team-tabs' },
  { name: 'Research Assistants', href: '/teams?tab=researchAssistants#team-tabs' },
  { name: 'Research Fellows', href: '/teams?tab=researchFellows#team-tabs' },
  { name: 'Communications', href: '/teams?tab=communications#team-tabs' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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

              {/* Teams Dropdown - shadcn NavigationMenu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/teams">
                      <NavigationMenuTrigger className="bg-transparent text-primary hover:text-primary-dark text-lg font-medium px-3 py-2 hover:bg-muted">
                        Teams
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent className="border border-border shadow-strong">
                      <div className="w-64 py-1">
                        {teamDropdownItems.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-primary hover:text-primary-dark px-3 py-2 text-base transition-all duration-300 hover:bg-muted rounded-md font-semibold"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Media Dropdown - shadcn NavigationMenu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-primary hover:text-primary-dark text-lg font-medium px-3 py-2 hover:bg-muted">
                      Media
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border border-border shadow-strong">
                      <div className="w-48 py-1">
                        {mediaDropdownItems.map((item) => (
                          item.href.startsWith('#') ? (
                            <NavigationMenuLink asChild key={item.name}>
                              <a
                                href={item.href}
                                className="block text-primary hover:text-primary-dark px-3 py-2 text-base transition-all duration-300 hover:bg-muted rounded-md font-semibold"
                              >
                                {item.name}
                              </a>
                            </NavigationMenuLink>
                          ) : (
                            <NavigationMenuLink asChild key={item.name}>
                              <Link
                                to={item.href}
                                className="block text-primary hover:text-primary-dark px-3 py-2 text-base transition-all duration-300 hover:bg-muted rounded-md font-semibold"
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          )
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
              
              {/* Mobile Teams Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="text-lg font-medium text-muted-foreground mb-2 px-3">Teams</div>
                {teamDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-primary hover:text-primary-dark block px-3 py-2 text-lg transition-all duration-300 hover:bg-background rounded-md font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Media Section */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="text-lg font-medium text-muted-foreground mb-2 px-3">Media</div>
                {mediaDropdownItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-primary hover:text-primary-dark block px-3 py-2 text-lg transition-all duration-300 hover:bg-background rounded-md font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-primary hover:text-primary-dark block px-3 py-2 text-lg transition-all duration-300 hover:bg-background rounded-md font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
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