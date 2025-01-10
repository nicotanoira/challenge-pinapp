import React from "react";

interface ErrorViewProps {
  errorMessage: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ errorMessage }) => {
  return (
    <div className="h-full flex-1 flex justify-center items-start">
      <h1 className="text-red-500 font-extrabold text-center mt-8 text-2xl md:text-5xl lg:text-3xl w-full">
        {errorMessage}
      </h1>
    </div>
  );
};

export default ErrorView;
