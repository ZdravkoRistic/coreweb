import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  iconStyle?: React.CSSProperties;
  className?: string;
};

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  iconStyle,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full mobile-button  border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          style={iconStyle}
        />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer mobile-padding">
        {title}
      </label>
    </button>
  );
};

export default Button;
