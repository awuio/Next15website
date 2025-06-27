import LandmarkCard from "../card/LandmarkCard";
import { LandmarkCardProps } from "@/utils/types";
import LoadingCard from "../card/LoadingCard";
//type land mark
const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-4 mt-4">
      {landmarks.map((landmark) => {
        return <LandmarkCard key={landmark.id} landmark={landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;
