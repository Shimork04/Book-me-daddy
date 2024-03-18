"use client";
import { useState } from "react";
import { Guests } from "./guests";
import { Table } from "./table";
import { Details } from "./personalDetails";
import { Review } from "./review";
import { Success } from "./succsess";

export const Handler = () => {
  const [timeSelect, setTimeSelect] = useState(false);
  const [tableSelect, setTableSelect] = useState(false);
  const [details, setDetails] = useState(false);
  const [review, setReview] = useState(false);
  const OnTimeSelect = () => {
    setTimeSelect(true);
  };
  const OnTableSelect = () => {
    setTableSelect(true);
  };
  const OnDetailsSelect = () => {
    setDetails(true);
  };
  const OnReview = () => {
    setReview(true);
  };

  return (
    <>
      {!timeSelect ? (
        <Guests onContinue={OnTimeSelect} />
      ) : !tableSelect ? (
        <Table onContinue={OnTableSelect} />
      ) : (!details ?(
        <Details onContinue={OnDetailsSelect} />
      ):( !review ?(
        <Review onContinue={OnReview} />
      ):(
        <Success />
      )
      )
      )}
    </>
  );
};
