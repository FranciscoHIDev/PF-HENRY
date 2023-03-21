import React from "react";
import loading from "../../assets/loading.gif";

function Loading() {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <img className="w-[300px] " src={loading} alt="loading" />
      </div>
    </React.Fragment>
  );
}

export default Loading;
