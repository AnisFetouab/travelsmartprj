
import { ChevronDown } from 'lucide-react';
import AnimatedGradient from './AnimatedGradient';

export const Hero = () => {
  const scrollToNextSection = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGradient />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 rounded-full glass">
              <span className="text-xs font-semibold tracking-wider uppercase">Votre assistant personnel de voyage</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in [animation-delay:200ms]">
            <span className="relative">
              Voyagez intelligent,
              <span className="absolute -bottom-1.5 left-0 w-full h-[0.5rem] bg-primary/20 rounded-full"></span>
            </span>
            <br />
            voyagez <span className="text-primary">TravelSmart</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:400ms]">
            Planifiez, réservez et profitez de vos voyages en toute simplicité grâce à notre assistant IA qui s'adapte à votre budget et aux conditions météorologiques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in [animation-delay:600ms]">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Commencer à planifier
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/80 rounded-md font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              En savoir plus
            </button>
          </div>
          
          <div className="flex justify-center absolute bottom-10 left-0 right-0 animate-bounce">
            <button 
              onClick={scrollToNextSection} 
              className="p-2 rounded-full glass hover:bg-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Défiler vers le bas"
            >
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
