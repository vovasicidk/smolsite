import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg mr-2"></div>
              <span className="text-xl font-bold">Bestvovsos</span>
            </div>
            <p className="text-slate-300 mb-6">Bestvovsos is da best sausages in the town!!!!!!</p>
            <div className="flex space-x-4">
              <SocialIcon href="https://twitter.com">
                <Twitter className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <Instagram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Integrations</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ProductX. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="px-5 py-2.5"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
