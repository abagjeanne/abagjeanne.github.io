import "@/components/style/SocialIcon.css";
import { ImageWrapper } from "@/components/data-display";

const SocialIcon = ({ url, icon, darkIcon }) => {
  return (
    <li className="social-icon relative 2xl:h-[50px] h-[44px] 2xl:w-[50px] w-[44px] border-dark rounded-[50%] overflow-hidden hover:scale-105 transition-all">
      <a className="block h-full w-full" href={url}>
        <div className="social-icon_front absolute top-0 left-0 h-full w-full">
          <ImageWrapper
            className="h-[18px] w-[18px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={icon}
            srcForDarkMode={darkIcon}
          />
        </div>
        <div className="social-icon_back absolute bottom-[-50px] left-0 h-full w-full">
          <ImageWrapper
            className="h-[18px] w-[18px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={icon}
            srcForDarkMode={darkIcon}
          />
        </div>
      </a>
    </li>
  );
};

export default SocialIcon;
