import { ArrowLeft } from "lucide-react";
import React, { type FC, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex mb-5">
        <Link
          to="/"
          className="border border-zinc-200 rounded-md  p-2 transition hover:bg-zinc-200"
        >
          <ArrowLeft />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default Container;
