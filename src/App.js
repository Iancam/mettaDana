import React from "react";
import { useState } from "react";
import "./App.css";
import { Entry } from "./components/Entry";
import { Receipt } from "./components/Receipt";

function UUIDGen() {
  return 1;
}

function App() {
  const [page, setPage] = useState("entry");
  const [stationId] = useState(UUIDGen());
  const [allValues, setAllValues] = useState([]);

  const receiptProps = { record: allValues[0], setPage };
  const entryProps = {
    stationId,
    allValues,
    setAllValues,
    setPage
  };
  const router = {
    entry: <Entry {...entryProps} />,
    receipt: <Receipt {...receiptProps} />
  };
  return router[page];
}

export default App;
