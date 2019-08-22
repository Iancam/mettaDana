import React from "react";
import { useState } from "react";
export function DisplayTable({ defaultState, allValues }) {
  return (
    <div className="db">
      <table>
        <thead />
        <tbody>
          <tr>
            {defaultState.map(({ name }) => (
              <td key={name}>{name}</td>
            ))}
          </tr>
          {allValues.map((v, i) => (
            <tr key={i}>
              {Object.values(v).map((d, i) => (
                <td key={i}>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
