import React, { FC } from 'react'
import { Place } from '../../types';
import Rating from '../../compenents/card/rating';

interface InfoProps {
  place: Place;
}

const Info:FC<InfoProps> = ({place}) => {
  return (
    <div className="flex my-6 justify-between">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">{place.name}</h1>
        <p className="text-zinc-600">{place.description}</p>
      </div>

      <div>
        <Rating rating={place.rating} expanded />
      </div>
    </div>
  );
}

export default Info;