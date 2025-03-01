import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full pt-20 px-7 md:pt-36  md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 ">
      <h1 className="sm:text-lg md:text-4xl xl:text-6xl relative font-bold text-gray-800 max-w-5xl mx-auto">
        Empower your future with the courses designed to
        <span className="text-blue-600"> fit your choice.</span>
        <img
          src={assets.sketch}
          alt="hero sketch image"
          className="hidden md:block  absolute -bottom-7 right-0"
        />
      </h1>

      <p className="md:text-2xl md:block hidden text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and proffessional
        goals.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors to help you achieve your
        proffessional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
