import React, { FC, use } from "react";
import { usePlaces } from "../../utils/service";
import Loader from "../../compenents/loader";
import Error from "../../compenents/error";
import Card from "../../compenents/card";
import { useSearchParams } from "react-router-dom";
const List: FC = () => {

  const [searchParams]=useSearchParams();

  const paramsObj= Object.fromEntries(searchParams);

  const { isLoading, data, error ,refetch} = usePlaces(paramsObj); 

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} onRetry={refetch} />;
 

 
  return (

  <div className="mt-10">

    <h1 className="text-2xl font-bold">Yakınınızdaki Yerler</h1>

   <div className="grid gap-5 mt-4">

   {data?.map((place) => (
      <Card key={place.id} place={place} />
    ))}

   </div>

    
  </div>);
};
export default List;
