import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyDetailsCard from "./ToyDetailsCard";
import TryNowForm from "./TryNowForm";
import { Helmet } from "react-helmet";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();

  const [toy, setToy] = useState({});
  // console.log(data, toyId, toy);

  useEffect(() => {
    const toyDetails = data.find((toy) => toy.toyId == toyId);
    setToy(toyDetails);
  }, [data, toyId]);

  return (
    <div className="bg-base-200 pt-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ToyDetails</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10">
        <div className="cols-span-1 md:col-span-2">
          <ToyDetailsCard toy={toy}></ToyDetailsCard>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <TryNowForm></TryNowForm>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
