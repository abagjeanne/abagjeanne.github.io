import "@/components/style/Button.css";

const Button = ({ children, className = "", href = "#" }) => {
  return (
    <a
      className={`block rounded-[20px] hover:scale-105 transition-all ${className}`}
      href={href}
    >
      <div className="avatar-btn w-full h-full font-bold relative overflow-hidden">
        <span className="btn-caption absolute w-full h-full flex justify-center items-center left-0 top-0">
          {children}
        </span>
        <span className="btn-caption-2 absolute w-full h-full flex justify-center items-center left-0 bottom-[-50px]">
          {children}
        </span>
      </div>
    </a>
  );
};

export default Button;
