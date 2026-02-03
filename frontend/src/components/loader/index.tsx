import { LoaderCircle } from "lucide-react";
import React, { type FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center my-20 lg:my-30">
      <LoaderCircle
        className="text-blue-500 animate-spin size-10
      "
      />
    </div>
  );
};

export default Loader;
