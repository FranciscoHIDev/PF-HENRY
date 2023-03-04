import React from "react";
import loading from "../../assets/loading2.gif";

function Loading() {
  return (
    <React.Fragment>
      <img className="w-[300px]" src={loading} alt="loading" />
    </React.Fragment>
  );
}

export default Loading;
