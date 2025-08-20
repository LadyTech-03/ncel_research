import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, MapPin, Mail, Phone, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import SectionWrapper from '@/components/sections/SectionWrapper';
import { Link } from 'react-router-dom';


const quickLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Team', href: '/teams' },
  { text: 'Publications', href: '/publications' },
];

const pillars = [{
  text: 'Research',
  href: '/?#research'
}, {
  text: 'Capacity Building',
  href: '/?#capacity-building'
}, {
  text: 'Entrepreneurship',
  href: '/?#entrepreneurship'
}, {
  text: 'Consulting',
  href: '/?#consulting'
}];

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ncelknust', Icon: Linkedin },
  { name: 'Twitter', href: 'https://x.com/NcelK33370/lists', Icon: FaXTwitter },
  { name: 'Facebook', href: 'https://business.facebook.com/latest/home?asset_id=104580749386371', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/ncelknust/', Icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@NCELKNUST', Icon: Youtube },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-professional to-primary-dark text-primary-foreground mx-6 rounded-3xl">
      <SectionWrapper className='py-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NCEL Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/logo_white.png" alt="NCEL" className="h-auto w-32 object-contain" />
            </div>
            
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
              Providing cutting-edge research, development, and innovation (RD&I) solutions for the robust assessment, monitoring, and mitigation of greenhouse gas (GHG) emissions in Ghana.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
              <div className="space-y-3">
                <Input 
                  placeholder="Enter Your E-mail Address"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" className="border-primary-foreground/30" />
                  <label htmlFor="privacy" className="text-sm text-primary-foreground/80">
                    I agree to the Privacy Policy
                  </label>
                </div>
                <Button 
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Send className=" h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ text, href }) => (
                <li className='text-lg' key={text}>
                  <Link
                    to={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Pillars */}
          <div>
            <h3 className="font-semibold text-lg mb-6">NCEL's Pillars</h3>
            <ul className="space-y-3">
              {pillars.map(({ text, href }) => (
                <li className='text-lg' key={text}>
                  <Link
                    to={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary-foreground/80" />
                <div className="text-primary-foreground">
                  Department of Petroleum Engineering<br />
                  Kwame Nkrumah University of Science and Technology (KNUST)<br />
                  PMB Kumasi, Ghana.
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <a 
                  href="mailto:ncel@knust.edu.gh" 
                  className="text-primary-foreground hover:underline"
                >
                  ncel@knust.edu.gh
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <a 
                  href="tel:+233245937358" 
                  className="text-primary-foreground hover:underline"
                >
                  +233-24-593-7358
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center">
          <div className="flex justify-center gap-3 mb-5">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
                title={name}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-primary-foreground/80">
            Copyright © 2025 All Rights Reserved.
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
};