import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <Skeleton className="h-12 w-1/4 mb-2" />
      <Skeleton className="h-[300px] md:h-[500px]" />
      <Skeleton className="h-8 mt-2" />
      <Skeleton className="h-8 w-3/4 mt-2" />
      <Skeleton className="h-8 w-2/4 mt-2" />
    </>
  );
};
export default loading;
