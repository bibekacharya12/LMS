import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className="flex items-center gap-4">
        <img
          className="hidden md:block w-20"
          src={assets.logo}
          alt="site logo"
        />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p>Copyright 2025 @copy; . All Right Reserved.</p>
      </div>

      <div className="flex items-center gap-3 max-md:mt-4  m-1">
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
