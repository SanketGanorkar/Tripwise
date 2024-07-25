import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 max-sm:ml-[180px]">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI :
        </span>
        Personalised Itineraies at Your Fingertips
        <p className="text-xl text-gray-500 text-center">
          Your Personalised trip planner and travel curator , creating custom
          iternaries tailored to your interests and budget.
        </p>
        <Link to={'/create-trip'} >
          <Button className="max-sm:mb-6"> Get Started , its free</Button>
        </Link>
      </h1>
    </div>
  );
}

export default Hero;
