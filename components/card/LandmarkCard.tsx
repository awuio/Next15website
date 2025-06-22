import { LandmarkCardProps } from "@/utils/types";
import Image from "next/image";
import LandmarkRating from "./LandmarkRating";
import FavoriteToggleButton from "./FavoriteToggleButton";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, description, id, price, province, lat, lng, category } =
    landmark;
  return (
    <article className="group relative">
      <div className="relative h-[300px] bg-red-300 mb-2 ">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw "
          alt={name}
          fill
          className=" object-cover rounded-md group-hover:scale-105
          transition-transform duration-300"
        />
      </div>

      <div className=" flex justify-between items-center">
        <h3 className="text-sm font-semibold mt-1">{name.substring(0, 30)}</h3>
        <p>
          <LandmarkRating />
        </p>
      </div>

      <p className=" text-sm mt-1 text-muted-foreground ">
        {description.substring(0, 40)}
      </p>

      <div className="flex items-center justify-between font-semibold text-sm">
        <span >THB {price}</span>
        <p >{province}</p>
      </div>

      <div className="absolute top-2 right-2">
        <FavoriteToggleButton landmarkId={id}/>
      </div>
    </article>
  );
};
export default LandmarkCard;
