import { FaShareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GetPlaceDetails } from "@/service/GlobalAPI.jsx";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/GlobalAPI.jsx";
function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((res) => {
      // console.log(res.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div>
      <img
        src={photoUrl ? photoUrl : './logo.svg'} 
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5 ">
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-md">
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 text-gray-500 bg-gray-200 rounded-full text-xs md:text-md">
              🧳 No. of Traveller : {trip?.userSelection?.traveller}
            </h2>
          </div>
        </div>
        <Button>
          <FaShareAlt />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
