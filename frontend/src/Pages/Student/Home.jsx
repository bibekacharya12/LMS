import CallToAction from "../../Components/Student/CallToAction";
import Companies from "../../Components/Student/Companies";
import CoursesSection from "../../Components/Student/CoursesSection";
import Footer from "../../Components/Student/Footer";
import Hero from "../../Components/Student/Hero";
import Testimonials from "../../Components/Student/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center ">
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
