import React from "react";

export const InpElem = ({ name, type, fx }) => {
  const onChangeScrubber = e => e.target.value;
  // console.log(fx);

  return (
    <div>
      <label htmlFor="name" className="">
        {name}
      </label>
      <input
        type={type || "text"}
        onChange={e => fx[1](onChangeScrubber(e))}
        value={fx[0]}
      />
    </div>
  );
};
