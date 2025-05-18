
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

export const Card = ({ title, description, icon, image }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="text-ceera-orange mr-3">{icon}</div>}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface CardSectionProps {
  title: string;
  subtitle?: string;
  cards: CardProps[];
  columns?: number;
  buttonText?: string;
  buttonLink?: string;
}

const CardSection = ({ title, subtitle, cards, columns = 3, buttonText, buttonLink }: CardSectionProps) => {
  const getGridCols = () => {
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        {buttonText && buttonLink && (
          <div className="mt-8 text-center">
            <Link to={buttonLink}>
              <Button className="bg-ceera-orange hover:bg-ceera-brown text-white">
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardSection;
