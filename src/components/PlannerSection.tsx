
import { useState } from 'react';
import { Search, Calendar, MapPin, Plane, Hotel, Navigation } from 'lucide-react';
import { setupScrollAnimations } from '@/utils/animations';
import WeatherWidget from './WeatherWidget';
import BudgetCalculator from './BudgetCalculator';

export const PlannerSection = () => {
  const [selectedTab, setSelectedTab] = useState('vol');
  const [destination, setDestination] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [dateRetour, setDateRetour] = useState('');
  const [voyageurs, setVoyageurs] = useState('');

  return (
    <section id="planner" className="py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Planificateur de voyage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planifiez votre prochain voyage</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Utilisez notre outil intelligent pour planifier votre voyage en tenant compte de votre budget et des conditions météorologiques.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-xl p-2 shadow-lg animate-on-scroll">
          <div className="grid grid-cols-3 gap-2 mb-6">
            <button
              className={`py-3 rounded-lg transition-all ${
                selectedTab === 'vol' 
                  ? 'bg-white shadow-md font-medium text-primary'
                  : 'hover:bg-white/50 text-gray-600'
              }`}
              onClick={() => setSelectedTab('vol')}
            >
              <div className="flex items-center justify-center gap-2">
                <Plane className="w-4 h-4" />
                <span>Vols</span>
              </div>
            </button>
            <button
              className={`py-3 rounded-lg transition-all ${
                selectedTab === 'hotel' 
                  ? 'bg-white shadow-md font-medium text-primary'
                  : 'hover:bg-white/50 text-gray-600'
              }`}
              onClick={() => setSelectedTab('hotel')}
            >
              <div className="flex items-center justify-center gap-2">
                <Hotel className="w-4 h-4" />
                <span>Hôtels</span>
              </div>
            </button>
            <button
              className={`py-3 rounded-lg transition-all ${
                selectedTab === 'activite' 
                  ? 'bg-white shadow-md font-medium text-primary'
                  : 'hover:bg-white/50 text-gray-600'
              }`}
              onClick={() => setSelectedTab('activite')}
            >
              <div className="flex items-center justify-center gap-2">
                <Navigation className="w-4 h-4" />
                <span>Activités</span>
              </div>
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Où allez-vous ?"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date de départ</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    value={dateDepart}
                    onChange={(e) => setDateDepart(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date de retour</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    value={dateRetour}
                    onChange={(e) => setDateRetour(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Voyageurs</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Nombre de voyageurs"
                    min="1"
                    className="px-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    value={voyageurs}
                    onChange={(e) => setVoyageurs(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Search className="w-4 h-4" />
                <span>Rechercher</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <WeatherWidget destination={destination || "Paris"} />
          <BudgetCalculator />
        </div>
      </div>
    </section>
  );
};

export default PlannerSection;
