
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlannerSection from '@/components/PlannerSection';
import DestinationCard from '@/components/DestinationCard';
import { setupScrollAnimations } from '/workspaces/travelsmartprj/src/utils/animation.ts';
import { Shield, Clock, Sparkles, CloudSun } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
      name: 'Paris',
      location: 'France',
      price: 799,
      rating: 4.7,
      bestSeason: 'Printemps'
    },
    {
      image: 'https://images.unsplash.com/photo-1542053254535-def95e944232?q=80&w=2070&auto=format&fit=crop',
      name: 'Barcelone',
      location: 'Espagne',
      price: 649,
      rating: 4.5,
      bestSeason: 'Été'
    },
    {
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop',
      name: 'Venise',
      location: 'Italie',
      price: 729,
      rating: 4.6,
      bestSeason: 'Automne'
    },
    {
      image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=2070&auto=format&fit=crop',
      name: 'Santorin',
      location: 'Grèce',
      price: 899,
      rating: 4.8,
      bestSeason: 'Été'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="features" className="py-24 px-6 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Fonctionnalités</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voyagez intelligent avec TravelSmart</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Notre assistant personnel de voyage vous offre une expérience de planification sans précédent grâce à des fonctionnalités intelligentes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité avancée</h3>
              <p className="text-gray-600">
                Authentification multi-facteurs et encryption de vos données pour des voyages en toute sérénité.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-on-scroll [animation-delay:200ms]">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Planification simplifiée</h3>
              <p className="text-gray-600">
                Créez et modifiez vos itinéraires en quelques clics avec notre interface intuitive.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-on-scroll [animation-delay:400ms]">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IA de recommandation</h3>
              <p className="text-gray-600">
                Découvrez des activités et hébergements personnalisés selon vos préférences et votre budget.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-on-scroll [animation-delay:600ms]">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <CloudSun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prévisions météo</h3>
              <p className="text-gray-600">
                Adaptez votre itinéraire en fonction des conditions météorologiques pour optimiser votre expérience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <PlannerSection />
      
      <section id="destinations" className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Destinations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destinations populaires</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Laissez-vous inspirer par nos destinations les plus appréciées et commencez à planifier votre prochain voyage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard 
                key={index}
                {...destination}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors animate-on-scroll">
              Voir toutes les destinations
            </button>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-24 px-6 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">À propos</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre voyage, optimisé</h2>
                <p className="text-gray-600 mb-6">
                  TravelSmart a pour ambition de révolutionner la planification de voyage en intégrant l'IA et l'automatisation pour offrir une expérience simplifiée et personnalisée.
                </p>
                <p className="text-gray-600 mb-8">
                  Avec une gestion intelligente des réservations, des recommandations adaptées et une synchronisation des données en temps réel, notre application apporte une réelle valeur ajoutée aux voyageurs modernes.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  En savoir plus
                </button>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
                    alt="Voyage avec TravelSmart" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-6 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  TravelSmart
                </span>
              </a>
              <p className="text-gray-500 mt-2 max-w-md">
                Assistant personnel de voyage intelligent qui simplifie l'organisation de vos voyages grâce à l'IA.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="mt-8 text-sm text-gray-500 md:mt-0 md:order-1">
              &copy; 2023 TravelSmart. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
