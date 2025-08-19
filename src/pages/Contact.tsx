import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/Footer"
import contactHeroImage from '@/assets/banner/banner_contact.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        // title="Contact" 
        backgroundImage={contactHeroImage}
        altText="Contact NCEL Team"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Have Questions? We're Ready to Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to collaborate, inquire about our research, or simply have a question — we're just a message away. Reach out to our team and we'll get back to you with the information you need.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <Card className="bg-card border border-border rounded-2xl shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                        <p className="text-foreground/80">+233 24 59 37358</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border rounded-2xl shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Email</h4>
                        <p className="text-foreground/80">ncel@knust.edu.gh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border rounded-2xl shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Address</h4>
                        <p className="text-foreground/80">The Net-Zero Carbon Emission Lab (NCEL)<br></br>Department of Petroleum Engineering<br></br>Kwame Nkrumah University of Science and Technology (KNUST)<br></br>PMB Kumasi, Ghana.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border border-border rounded-2xl shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-primary/5 border-primary/20 text-foreground placeholder:text-foreground/60 focus-visible:ring-primary h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-primary/5 border-primary/20 text-foreground placeholder:text-foreground/60 focus-visible:ring-primary h-12 text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-primary/5 border-primary/20 text-foreground placeholder:text-foreground/60 focus-visible:ring-primary h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[160px] bg-primary/5 border-primary/20 text-foreground placeholder:text-foreground/60 focus-visible:ring-primary text-base"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-base">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Find Us</h3>
          <Card className="bg-card border border-border rounded-2xl shadow-card">
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d540.0994412112814!2d-1.564838530803079!3d6.6729433696084435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946359c7cdd1%3A0x3ddaf3f8e0fe9248!2sCOE%20Petroleum%20Building!5e0!3m2!1sen!2sgh!4v1755600500649!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KNUST Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;