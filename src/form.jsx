import React from "react";

const Donor = {
  name: "string",
  address: "string"
};

const Donation = {
  donor: "donor",
  amount: "number",
  date: "date"
};

const types = {
  donation: Donation,
  donor: Donor,
  string: name => `<input name={name} id="" />`,
  number: name => `<input type="number" name={name} id="" />`,
  date: name => `<input type="date" name={name} />`
};

const resolveForm = initial => {
  if (!types[initial]) {
    console.log(initial);
  }
  console.log(initial);

  Object.entries(types[initial]).map(
    (k, v) => `<div> <label htmlFor=${k}>k</label>${resolveForm(v)}</div>`
  );
};

console.log(resolveForm("donation"));
