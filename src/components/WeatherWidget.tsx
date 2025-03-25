
import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from 'lucide-react';

interface WeatherWidgetProps {
  destination: string;
}

const WeatherWidget = ({ destination }: WeatherWidgetProps) => {
  // Dans une vraie application, ces données viendraient d'une API météo
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: 'sunny',
    humidity: 45,
    windSpeed: 12,
    forecast: [
      { day: 'Lun', temp: 22, condition: 'sunny' },
      { day: 'Mar', temp: 23, condition: 'sunny' },
      { day: 'Mer', temp: 20, condition: 'cloudy' },
      { day: 'Jeu', temp: 18, condition: 'rainy' },
      { day: 'Ven', temp: 19, condition: 'cloudy' },
    ]
  });

  useEffect(() => {
    // Simuler un chargement de données météo
    // Dans une vraie application, on ferait un appel API
    const timer = setTimeout(() => {
      if (destination === 'New York') {
        setWeatherData({
          temperature: 15,
          condition: 'cloudy',
          humidity: 60,
          windSpeed: 20,
          forecast: [
            { day: 'Lun', temp: 15, condition: 'cloudy' },
            { day: 'Mar', temp: 14, condition: 'rainy' },
            { day: 'Mer', temp: 13, condition: 'rainy' },
            { day: 'Jeu', temp: 16, condition: 'cloudy' },
            { day: 'Ven', temp: 18, condition: 'sunny' },
          ]
        });
      } else if (destination === 'Tokyo') {
        setWeatherData({
          temperature: 28,
          condition: 'sunny',
          humidity: 70,
          windSpeed: 8,
          forecast: [
            { day: 'Lun', temp: 28, condition: 'sunny' },
            { day: 'Mar', temp: 29, condition: 'sunny' },
            { day: 'Mer', temp: 30, condition: 'sunny' },
            { day: 'Jeu', temp: 27, condition: 'cloudy' },
            { day: 'Ven', temp: 26, condition: 'rainy' },
          ]
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [destination]);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-6 h-6 text-yellow-400" />;
      case 'cloudy':
        return <Cloud className="w-6 h-6 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="w-6 h-6 text-blue-400" />;
      case 'snowy':
        return <CloudSnow className="w-6 h-6 text-blue-200" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <div className="glass-card animate-on-scroll rounded-xl overflow-hidden shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">Météo à {destination}</h3>
        <p className="text-sm text-gray-500 mb-4">Prévisions pour votre voyage</p>
        
        <div className="flex items-center mb-6">
          <div className="mr-4">
            {getWeatherIcon(weatherData.condition)}
          </div>
          <div>
            <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
            <div className="text-sm text-gray-500 capitalize">
              {weatherData.condition === 'sunny' ? 'Ensoleillé' : 
               weatherData.condition === 'cloudy' ? 'Nuageux' : 
               weatherData.condition === 'rainy' ? 'Pluvieux' : 'Neigeux'}
            </div>
          </div>
          <div className="ml-auto">
            <div className="flex items-center mb-1">
              <span className="text-sm text-gray-500 mr-2">Humidité:</span>
              <span className="text-sm font-medium">{weatherData.humidity}%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Vent:</span>
              <span className="text-sm font-medium">{weatherData.windSpeed} km/h</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="text-center p-2 rounded-lg hover:bg-white transition-colors">
              <div className="text-sm font-medium mb-1">{day.day}</div>
              <div className="flex justify-center mb-1">
                {getWeatherIcon(day.condition)}
              </div>
              <div className="text-sm font-bold">{day.temp}°</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Planifiez vos activités en fonction de la météo. TravelSmart vous recommandera les meilleures journées pour chaque activité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
