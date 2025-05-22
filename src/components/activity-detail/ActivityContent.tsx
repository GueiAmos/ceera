
import { Activity } from '@/models/Activity';
import ActivityDetailHeader from './ActivityDetailHeader';
import ActivityGallery from './ActivityGallery';

interface ActivityContentProps {
  activity: Activity;
}

const ActivityContent = ({ activity }: ActivityContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <ActivityDetailHeader activity={activity} />
      
      <div className="prose prose-lg max-w-none mb-12"
           dangerouslySetInnerHTML={{ __html: activity.content }} 
      />
      
      {activity.images && activity.images.length > 0 && (
        <ActivityGallery images={activity.images} />
      )}
    </div>
  );
};

export default ActivityContent;
