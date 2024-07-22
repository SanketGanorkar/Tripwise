import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetPlaceDetails } from "@/service/GlobalAPI";
import { PHOTO_REF_URL } from "@/service/GlobalAPI";
// import { Button } from "@/components/ui/button";
function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
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
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target="_blank">
      <div className="border rounded-xl mt-2 p-3 flex gap-5 hover:scale-105 transition-all hover:shadow-2xl cursor-pointer">
        <img src={photoUrl ? photoUrl : './logo.svg'} className="w-[130px] h-[130px] rounded-xl object-cover" />
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          <h2 className="mt-2">🕙 {place.timeToTravel}</h2>
          {/* <Button size="sm"><FaLocationDot/></Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
