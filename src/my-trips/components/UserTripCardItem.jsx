import { GetPlaceDetails } from "@/service/GlobalAPI";
import { PHOTO_REF_URL } from "@/service/GlobalAPI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function UserTripCardItem({ trip }) {
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
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all">
        <img
          src={photoUrl ? photoUrl : "/tripwise.svg"}
          className="object-cover rounded-xl h-[220px]"
        />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} day Trip with{" "}
            {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
