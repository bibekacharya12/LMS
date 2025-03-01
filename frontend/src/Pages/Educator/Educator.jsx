import { Outlet } from "react-router-dom";
import Footer from "../../Components/Educator/Footer";
import Navbar from "../../Components/Educator/Navbar";
import Sidebar from "../../Components/Educator/Sidebar";

const Educator = () => {
  return (
    <div className="default min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1"> {<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;
