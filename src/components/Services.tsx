import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Cloud, 
  Database, 
  Smartphone, 
  Shield, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import servicesImage from '@/assets/services-bg.jpg';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
      features: ["Full-stack Development", "API Integration", "Legacy System Modernization", "Performance Optimization"],
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Cloud Computing Solutions",
      description: "Comprehensive cloud services including migration, architecture, and ongoing management for Azure and AWS platforms.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Cost Optimization"],
      color: "secondary"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Design and implement robust data pipelines, analytics solutions, and database optimization for your business.",
      features: ["Data Pipeline Design", "Analytics Dashboards", "Database Optimization", "Real-time Processing"],
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Store Deployment"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"],
      color: "secondary"
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
      features: ["Technology Strategy", "Digital Transformation", "Process Automation", "Vendor Selection"],
      color: "accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={servicesImage} 
          alt="Services Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of technology services designed to accelerate your 
            digital transformation and drive business success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-500 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-glow`}
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your goals and 
            stay ahead of the competition.
          </p>
          <Button variant="hero" size="xl" className="group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;