import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <>
      <SkeletonCardHero />
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-4 mt-4"
      >
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  );
};

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] mb-2" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/4 mb-2" />
    </div>
  );
};
export const SkeletonCardHero = () => {
  return (
    <div>
      <Skeleton className="w-full h-[600px] mb-4" />
      <div className="flex justify-center gap-x-6">
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
        <Skeleton className="w-14 h-12 mb-2 p-3" />
      </div>
    </div>
  );
};
export default LoadingCard;
