import React from "react";
import { useState } from "react";
import { InpElem } from "./InpElem";
import { DisplayTable } from "./DisplayTable";
export function Entry({ stationId, allValues, setAllValues, setPage }) {
  const [tableShowing, setTableShowing] = useState(true);
  const defaultState = [
    { name: "name", fx: useState("") },
    { name: "Address Line 1", fx: useState("") },
    { name: "Address Line 2", fx: useState("") },
    { name: "Address Line 3", fx: useState("") },
    { name: "amount", fx: useState(0), type: "number" },
    { name: "stationId", fx: useState(""), hidden: true },
    { name: "date", fx: useState(""), type: "date", hidden: true }
  ];
  const onClick = () => {
    const val = defaultState.reduce((obj, { name, fx }) => {
      obj[name] = fx[0];
      return obj;
    }, {});
    val.date = new Date().toDateString();
    val.stationId = stationId;
    setAllValues([val, ...allValues]);
    setPage("receipt");
  };
  return (
    <div className="App">
      <h1>Make Your Donation</h1>
      {InpElem(defaultState[0])}
      <div className="">
        <h2 htmlFor="address">Address</h2>
        {InpElem(defaultState[1])}
        {InpElem(defaultState[2])}
        {InpElem(defaultState[3])}
        <div className="">
          <h2>Donation Details</h2>
          {InpElem(defaultState[4])}
        </div>
        <input type="button" value="submit" onClick={onClick} />
      </div>
      {tableShowing && (
        <DisplayTable allValues={allValues} defaultState={defaultState} />
      )}
      <button onClick={() => setTableShowing(!tableShowing)}>
        Toggle Table of Values
      </button>
    </div>
  );
}
