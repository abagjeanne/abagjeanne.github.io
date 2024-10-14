import { MessageSquareMore } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { ThemeSwitcher } from "@/components/general";
import { Button } from "@/components/layout";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const Header = () => {
  const { activeLink } = UseActiveLinkContext();

  return (
    <>
      <div className="lg:pl-[30px] lg:sticky fixed lg:top-8 bottom-8 left-1/2 transform -translate-x-1/2 lg:translate-x-0 rounded-3xl lg:bg-transparent bg-[#00000008] backdrop-blur-md lg:backdrop-blur-none z-10">
        <div className="w-full flex items-center justify-between">
          <ul className="flex items-center lg:gap-2 text-[18px] font-semibold">
            {NAV_LINKS.map((navLink, index) => (
              <li
                key={index}
                className={`lg:backdrop-blur-sm rounded-3xl overflow-hidden xl:w-auto lg:w-[50px] w-[44px] lg:h-[50px] h-[44px] xl:h-[50px] flex items-center justify-center lg:bg-transparent lg:dark:bg-transparent
                  ${activeLink == navLink.href.substring(1) && "lg:border-dark bg-[#111111] dark:bg-[#fafafa]"}
                  `}
              >
                <a
                  className={`
                    xl:px-5 lg:hover:text-bright transition-colors h-full flex items-center justify-center
                    ${
                      activeLink == navLink.href.substring(1)
                        ? "lg:text-bright lg:dark:text-[#E9E9F1] text-[#EBF0F7] dark:text-[#121319]"
                        : "text-disabled"
                    }
                    `}
                  href={navLink.href}
                >
                  <span className="xl:block hidden">{navLink.label}</span>
                  <navLink.icon className="h-[18px] w-[18px] xl:hidden block" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button className="2xl:w-[177px] lg:w-[145px] w-[44px] 2xl:h-[60px] lg:h-[50px] h-[44px] text-btn bg-btn">
              <span className="lg:block hidden">Let's Talk</span>
              <MessageSquareMore className="h-[18px] w-[18px] lg:ms-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
