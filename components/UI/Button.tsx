import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ text, icon, className, iconPosition = "left", ...props }) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 text-black dark:text-white w-full bg-white dark:bg-secondaryDark hover:dark:bg-secondaryDark/50 hover:bg-white/60 active:scale-95 rounded-md transition-all flex items-center justify-center", 
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
