import React, { type FC } from "react";
import type { Place } from "../../types";
import Rating from "../../components/card/rating";

interface Props {
  place: Place;
}

const Info: FC<Props> = ({ place }) => {
  return (
    <>
      <div className="flex my-6 justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl ">{place.name}</h1>
          <p className="text-zinc-600">{place.description}</p>
        </div>

        <div>
          <Rating rating={place.rating} expand={true} />
        </div>
      </div>

      <div className="flex gap-6 text-zinc-600 border-b border-zinc-300 pb-2">
        <span>Genel</span>
        <span>Odalar</span>
        <span>Özellikler</span>
        <span>Kurallar</span>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <h1>Özellikler</h1>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {place.amenities.map((item, key) => (
              <span
                key={key}
                className="border border-gray-300 rounded-md p-2 line-clamp-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <iframe
            width="450"
            height="250"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              import.meta.env.VITE_MAPS_API_KEY
            }&q=${place.location}`}
            className="rounded-lg w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Info;
