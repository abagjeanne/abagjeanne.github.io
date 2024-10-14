import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider";
import { MoonStar, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme == "dark" ? setTheme("light") : setTheme("dark");

  return (
    <Button
      onClick={toggleTheme}
      varaiant="outline"
      size="icon"
      className="bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-disabled dark:text-disabled hover:text-bright transition-colors dark:hover:text-bright rounded-3xl lg:backdrop-blur-sm"
    >
      {theme == "dark" ? <Sun className="h-[18px] w-[18px]" /> : <MoonStar className="h-[18px] w-[18px]" />}
    </Button>
  );
};

export default ThemeSwitcher;
