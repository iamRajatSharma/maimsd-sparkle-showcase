import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Users, label: "Expert Team", value: "10+", desc: "Skilled Professionals" },
    { icon: Award, label: "Founded", value: "2023", desc: "Fresh Innovation" },
    { icon: Clock, label: "Experience", value: "24/7", desc: "Support Available" },
    { icon: Target, label: "Focus", value: "100%", desc: "Client Success" }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Azure", "AWS", "Docker", 
    "Kubernetes", "MongoDB", "PostgreSQL", "TypeScript", "Next.js", "GraphQL"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">MAIMSD Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2023, MAIMSD Technology is a dynamic software development company 
            specializing in computer programming, consultancy, and related activities. 
            Based in Tamil Nadu, India, we bring fresh perspectives and innovative solutions 
            to the tech industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are committed to transforming businesses through innovative software solutions, 
              cloud computing expertise, and comprehensive IT consultancy services. Our goal is 
              to empower organizations with cutting-edge technology that drives growth and efficiency.
            </p>
            <div className="space-y-4">
              {[
                "Custom Software Development",
                "Cloud Migration & Management",
                "IT Strategy Consulting",
                "Digital Transformation"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
                <p className="text-sm font-medium text-primary mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;