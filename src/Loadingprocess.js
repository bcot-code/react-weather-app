import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loadingprocess(props) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={"#36d7b7"}
        loading={true}
        cssOverride={""}
        size={150}
        aria-label="Loading Spinner"
        speedMultiplier={1.5}
        data-testid="loader"
      />
    </div>
  );
}
