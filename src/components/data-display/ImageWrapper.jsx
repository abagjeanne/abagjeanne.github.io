import { useTheme } from "@/components/theme-provider";

const ImageWrapper = ({ srcForDarkMode, src, className, ...props }) => {
  const { theme } = useTheme();

  const srcHandler = () => {
    if (srcForDarkMode) {
      if (theme == "dark") {
        return srcForDarkMode;
      } else if (theme == "light") {
        return src;
      }
    }
    return src;
  };

  return <img src={srcHandler()} className={`${className}`} />;
};

export default ImageWrapper;