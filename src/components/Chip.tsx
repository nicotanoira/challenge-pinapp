import React from "react";

interface ErrorViewProps {
  text: string;
  size?: string;
  truncate?: boolean;
  onClick?: () => void;
  customStyle?: string;
}

const Chip: React.FC<ErrorViewProps> = ({
  text,
  size = "12px",
  truncate = false,
  onClick,
  customStyle,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        border-blue-500 border-2 text-blue-500 w-fit font-semibold py-0.5 px-2 rounded-full 
        ${truncate && "truncate"} 
        ${customStyle}
        ${!onClick && "cursor-default hover:border-blue-600 text-blue-600"}
        ${size}
      `}
    >
      {text}
    </button>
  );
};

export default Chip;
