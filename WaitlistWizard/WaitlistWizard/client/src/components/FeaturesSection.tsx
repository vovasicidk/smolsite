import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  BarChart, 
  Users, 
  Lock, 
  Boxes, 
  Clock 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, className, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${className}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Smart Automation",
      description: "Automated sausages delivery.",
      className: "bg-primary/10",
      delay: 0
    },
    {
      icon: <BarChart className="h-6 w-6 text-secondary" />,
      title: "Advanced Analytics",
      description: "You can see how your sausages being made.",
      className: "bg-secondary/10",
      delay: 0.1
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Family Collaboration",
      description: "Get 5% discount for adding a family member.(doesn't stack)",
      className: "bg-accent/10",
      delay: 0.2
    },
    {
      icon: <Lock className="h-6 w-6 text-green-500" />,
      title: "Enterprise Security",
      description: "Keep your sausages safe with enterprise-grade security and customizable permission settings.",
      className: "bg-green-500/10",
      delay: 0.3
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Time Tracking",
      description: "Monitor productivity and track sausages time untill they are expired.",
      className: "bg-red-500/10",
      delay: 0.5
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Designed for Tastiness</h2>
          <p className="text-muted-foreground text-lg">We provide you sausages.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={feature.className}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
