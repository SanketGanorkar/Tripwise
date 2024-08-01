import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCardItem from "./components/UserTripCardItem.jsx";

function MyTrips() {
  useEffect(() => {
    GetUserTrips();
  }, []);
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  // Used for getting all the user trips
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
      return;
    }

    console.log(userTrips);
    // A query to fetch documents from the "AITrips" collection where "userEmail" matches user's email.
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrips([]); // make sure while adding new value , this should be empty
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">My Trips</h2>
        <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
          {userTrips.length > 0 ? 
            userTrips.map((trip, index) => (
              <UserTripCardItem trip={trip} key={index} />
            )): 
            // adding the skeleton effect , if images take a longer time to load
            [1,2,3,4,5,6].map((item,index)=>(
              <div key={index} className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl">

              </div>
            ))
          }
        </div>
      </div>
    
  );
}

export default MyTrips;
