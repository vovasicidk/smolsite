import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">We just send you sausages......</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">1</div>
              <div className="hidden md:block h-1 flex-grow bg-primary/20 ml-4"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Sign Up & Personalize</h3>
            <p className="text-muted-foreground">Create your account and set up your preferences to get best sausages for you yourself.</p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">2</div>
              <div className="hidden md:block h-1 flex-grow bg-primary/20 ml-4"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect Your Data</h3>
            <p className="text-muted-foreground">Import your existing data or integrate with your current sausages.</p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">3</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Start Being full</h3>
            <p className="text-muted-foreground">Use our sausages to get some callories.</p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">See Bestvovsos in Action</h3>
                <p className="text-slate-300 mb-6">Watch our demo to see how Bestvovsos transports sausages</p>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-700 flex items-center justify-center min-h-[300px]">
              <div className="p-8 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
