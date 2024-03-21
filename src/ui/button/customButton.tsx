import cn from "clsx";
import { FC, PropsWithChildren } from "react";

interface IButton {
  className?: string;
  onClick?: () => void;
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "bg-slate-400 text-xl shadow-lg transition-all flex items-center gap-5",
        "px-2 py-4 rounded-2xl hover:shadow-xl hover:shadow-slate-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
