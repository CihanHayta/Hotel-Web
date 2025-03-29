import React, { FC } from 'react'
import { Place } from '../../types';


interface Props {
    rating: number;
    expanded?: boolean;
}

export const Rating: FC<Props> = ({ rating, expanded = false }) => {

const color = rating >=4.5 ? "bg-blue-500" : rating >= 4 ? "bg-green-500" : rating>=3 ? "bg-yellow-500" : "bg-red-500";

const text = rating>=4.5 ? "olagan ustu " : rating>=4 ? "harika" : rating>=3 ? "iyi" : rating>=2 ? "berbart" : "kötü";
  return(
    <div>
    <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}> {rating} </span>
    {expanded && <span className="font-semibold text-lg ms-2">{text}</span>}
  </div>
  );
};

export default Rating;