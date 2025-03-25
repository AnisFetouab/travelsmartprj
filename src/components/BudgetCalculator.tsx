
import { useState } from 'react';
import { DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const BudgetCalculator = () => {
  const [budget, setBudget] = useState<string>('1000');
  const [duration, setDuration] = useState<string>('7');

  // Calculs
  const budgetPerDay = budget && duration ? Math.round(parseInt(budget) / parseInt(duration)) : 0;
  const accomodationCost = budgetPerDay ? Math.round(budgetPerDay * 0.4) : 0;
  const foodCost = budgetPerDay ? Math.round(budgetPerDay * 0.3) : 0;
  const activitiesCost = budgetPerDay ? Math.round(budgetPerDay * 0.2) : 0;
  const transportCost = budgetPerDay ? Math.round(budgetPerDay * 0.1) : 0;

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-lg animate-on-scroll">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">Calculateur de budget</h3>
        <p className="text-sm text-gray-500 mb-4">Estimez vos dépenses quotidiennes</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget total (€)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="budget"
                type="number"
                min="0"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              Durée (jours)
            </label>
            <input
              id="duration"
              type="number"
              min="1"
              className="px-4 py-3 w-full rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Budget quotidien:</span>
            <span className="text-lg font-bold text-primary">{budgetPerDay} €</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full mb-4">
            <div 
              className="h-2 bg-primary rounded-full"
              style={{ width: '100%' }}
            ></div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Hébergement (40%)</span>
              <span className="text-sm font-medium">{accomodationCost} €</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Nourriture (30%)</span>
              <span className="text-sm font-medium">{foodCost} €</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Activités (20%)</span>
              <span className="text-sm font-medium">{activitiesCost} €</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Transport local (10%)</span>
              <span className="text-sm font-medium">{transportCost} €</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 bg-white border border-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-all">
            <TrendingUp className="w-4 h-4" />
            <span>Analyse détaillée</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            TravelSmart vous aide à optimiser votre budget en fonction des coûts moyens à votre destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
