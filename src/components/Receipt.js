import React from "react";
import { useState } from "react";
export const Receipt = ({
  setPage,
  record: { name, line1, line2, line3, amount, stationId, date }
}) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h2>{amount}</h2>
      <button onClick={() => setPage("entry")}>Confirm and Print</button>
    </>
  );
};
