"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoBack: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      aria-label="Go back"
      className="flex absolute left-2 top-2 items-center justify-center rounded-full px-3 py-2 text-xl  text-blue-500 hover:bg-blue-500 hover:text-white"
    >
      <span className="text-xl">&larr;</span>
    </button>
  );
};

export default GoBack;
