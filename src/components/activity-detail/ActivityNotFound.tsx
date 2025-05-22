
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ActivityNotFound = () => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Activité non trouvée</h2>
      <p>L'activité que vous recherchez n'existe pas ou a été supprimée.</p>
      <Link
        to="/activities"
        className="inline-flex items-center mt-6 px-6 py-3 bg-ceera-orange text-white rounded-md hover:bg-ceera-brown transition-colors"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Retour aux activités
      </Link>
    </div>
  );
};

export default ActivityNotFound;
