
import { useState } from 'react';
import { Tag, MapPin, Calendar } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  bestSeason: string;
}

const DestinationCard = ({ image, name, location, price, rating, bestSeason }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-lg hover-scale group animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <Tag className="w-3 h-3 mr-1" />
          <span>Recommandé</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <div className="flex items-center text-white/80 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{bestSeason}</span>
          </div>
        </div>

        <div className={`mt-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">{price} €</span>
              <span className="text-xs ml-1 opacity-80">/ personne</span>
            </div>
            <button className="px-4 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Explorer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
