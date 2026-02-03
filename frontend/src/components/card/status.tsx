import { SquareCheck, SquareX } from "lucide-react";
import React, { type FC } from "react";

const Status: FC<{ availability: boolean }> = ({ availability }) => {
  return (
    <div
      className={`${availability ? "bg-green-100" : "bg-red-100"} flex items-center gap-2 border border-zinc-200 p-2 rounded-md `}
    >
      {availability ? (
        <SquareCheck className="text-green-500" />
      ) : (
        <SquareX className="text-red-500" />
      )}
    </div>
  );
};

export default Status;
