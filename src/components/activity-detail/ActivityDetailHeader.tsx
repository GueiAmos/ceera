
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, FileText, ChevronLeft } from 'lucide-react';
import { Activity } from '@/models/Activity';

interface ActivityDetailHeaderProps {
  activity: Activity;
}

const ActivityDetailHeader = ({ activity }: ActivityDetailHeaderProps) => {
  return (
    <>
      <div className="mb-4">
        <Link
          to="/activities"
          className="inline-flex items-center text-ceera-orange hover:text-ceera-brown transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Retour aux activités
        </Link>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between bg-secondary/10 p-5 rounded-lg">
        <div className="space-y-2">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-ceera-orange" />
            <span className="font-medium">{activity.date}</span>
          </div>
          
          {activity.time && (
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-ceera-orange" />
              <span>{activity.time}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-ceera-orange" />
            <span>{activity.location}</span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <div className="flex items-center">
            <Users size={18} className="mr-2 text-ceera-orange" />
            <span>{activity.author}</span>
          </div>
          
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ceera-orange/10 text-ceera-orange">
            <FileText size={14} className="mr-1" />
            {activity.category === "evenements" ? "Événement" : 
             activity.category === "comptes-rendus" ? "Compte-rendu" : "Actualité"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetailHeader;
