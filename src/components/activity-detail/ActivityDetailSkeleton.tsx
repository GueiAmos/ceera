
import { Skeleton } from '@/components/ui/skeleton';

const ActivityDetailSkeleton = () => {
  return (
    <div>
      <div className="bg-gray-200 h-[400px] w-full flex items-center justify-center">
        <Skeleton className="h-20 w-1/2" />
      </div>
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-40 mb-8" />
            
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between bg-secondary/10 p-5 rounded-lg">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-40" />
              </div>
              <div className="mt-4 md:mt-0">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-6 w-24 mt-2" />
              </div>
            </div>
            
            <div className="space-y-4 mb-12">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            
            <div className="mb-12">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Skeleton key={i} className="aspect-square" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetailSkeleton;
