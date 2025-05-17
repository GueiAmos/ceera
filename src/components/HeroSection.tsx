
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'center' | 'right';
  overlayOpacity?: number;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
  buttonText,
  buttonLink,
  height = 'medium',
  textAlign = 'center',
  overlayOpacity = 0.6,
}: HeroSectionProps) => {
  // Définir la hauteur en fonction de la prop height
  const getHeight = () => {
    switch(height) {
      case 'small': return 'h-[300px] md:h-[400px]';
      case 'large': return 'h-[600px] md:h-[700px]';
      default: return 'h-[500px] md:h-[600px]';
    }
  };

  // Définir l'alignement du texte
  const getTextAlign = () => {
    return `text-${textAlign}`;
  };

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className={`relative w-full ${getHeight()} flex items-center justify-center text-white`}
      style={bgStyle}
    >
      <div className={`container mx-auto px-4 z-10 ${getTextAlign()}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button size="lg" className="bg-ceera-orange hover:bg-ceera-brown text-white font-medium rounded-md transition-colors">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
