import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z" fill="rgba(0,0,0,0.07)"%3E%3C/path%3E%3C/svg%3E')`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            Coming Soon
          </motion.span>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            The Smart Way to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Buy the tastiests</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Bestvovsos combines tastiest sausages in one package to help you accomplish more in less time.
            Join our waitlist for early access.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('waitlist')}
              className="w-full sm:w-auto"
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('how-it-works')}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] bg-gradient-to-tr from-slate-800 to-slate-900 w-full rounded-xl flex items-center justify-center">
              {/* Dashboard Preview Mockup */}
              <div className="relative w-[90%] h-[90%] rounded-lg bg-slate-800 p-4">
                <div className="h-6 flex items-center gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="grid grid-cols-12 gap-4 h-[calc(100%-24px)]">
                  <div className="col-span-3 bg-slate-700 rounded-md p-2">
                    <div className="h-8 w-3/4 bg-slate-600 rounded mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-slate-600/50 rounded flex items-center px-2">
                        <div className="w-5 h-5 rounded bg-slate-500 mr-2"></div>
                        <div className="h-3 w-20 bg-slate-500 rounded"></div>
                      </div>
                      <div className="h-8 bg-primary/30 rounded flex items-center px-2">
                        <div className="w-5 h-5 rounded bg-primary/50 mr-2"></div>
                        <div className="h-3 w-20 bg-primary/50 rounded"></div>
                      </div>
                      <div className="h-8 bg-slate-600/50 rounded flex items-center px-2">
                        <div className="w-5 h-5 rounded bg-slate-500 mr-2"></div>
                        <div className="h-3 w-14 bg-slate-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-9 bg-slate-700 rounded-md p-3">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-6 w-40 bg-slate-600 rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-slate-600 rounded"></div>
                        <div className="h-8 w-24 bg-primary rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-600/50 rounded-md p-3">
                        <div className="w-full h-3 bg-slate-500 rounded mb-2"></div>
                        <div className="w-1/2 h-8 bg-green-500/30 rounded mb-1"></div>
                        <div className="w-3/4 h-2 bg-slate-500 rounded"></div>
                      </div>
                      <div className="bg-slate-600/50 rounded-md p-3">
                        <div className="w-full h-3 bg-slate-500 rounded mb-2"></div>
                        <div className="w-3/4 h-8 bg-blue-500/30 rounded mb-1"></div>
                        <div className="w-2/3 h-2 bg-slate-500 rounded"></div>
                      </div>
                      <div className="bg-slate-600/50 rounded-md p-3">
                        <div className="w-full h-3 bg-slate-500 rounded mb-2"></div>
                        <div className="w-1/4 h-8 bg-red-500/30 rounded mb-1"></div>
                        <div className="w-1/2 h-2 bg-slate-500 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-slate-600/30 rounded-md p-3 mb-3">
                      <div className="flex justify-between items-center mb-3">
                        <div className="h-4 w-24 bg-slate-500 rounded"></div>
                        <div className="h-6 w-20 bg-slate-500 rounded"></div>
                      </div>
                      <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md"></div>
                    </div>
                    <div className="bg-slate-600/30 rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-4 w-32 bg-slate-500 rounded"></div>
                        <div className="h-6 w-6 bg-slate-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-slate-500 rounded-full"></div>
                          <div className="h-3 w-full bg-slate-500 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-primary rounded-full"></div>
                          <div className="h-3 w-3/4 bg-slate-500 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 bg-slate-500 rounded-full"></div>
                          <div className="h-3 w-5/6 bg-slate-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
