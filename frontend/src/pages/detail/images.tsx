import React, { type FC } from "react";

interface Props {
  image: string;
}

const Images: FC<Props> = ({ image }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4 w-full">
      <div className="w-full">
        <img src={image} alt="place" className="image" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src="/image-2.jpeg" className="image" alt="place" />
        <img src="/image-3.jpeg" className="image" alt="place" />
        <img src="/image-4.jpeg" className="image" alt="place" />
        <img src="/image-5.jpg" className="image" alt="place" />
      </div>
    </div>
  );
};

export default Images;
