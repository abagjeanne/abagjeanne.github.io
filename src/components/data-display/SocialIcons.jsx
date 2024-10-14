import { SOCIAL_LINKS } from "@/lib/data";
import { SocialIcon } from "@/components/data-display";

const SocialIcons = () => {
  return (
    <ul className="flex items-center justify-between mb-2">
      {SOCIAL_LINKS.map((social, index) => (
        <SocialIcon key={index} {...social} />
      ))}
    </ul>
  );
};

export default SocialIcons;
