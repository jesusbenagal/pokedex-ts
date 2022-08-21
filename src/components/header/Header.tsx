import React from "react";

export const Header = () => {
  return (
    <div
      className="bg-danger"
      style={{ padding: "1rem", borderRadius: "0px 0px 32px 32px" }}
    >
      <h1 className="text-center bg-danger">Pokédex - TS</h1>
      <h5 className="text-center bg-danger">
        This is a Pokédex app using React with Typescript
      </h5>
    </div>
  );
};
