
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-white"
      style={bgStyle}
    >
      <div className="container mx-auto text-center px-4 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
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
    </div>
  );
};

export default HeroSection;
