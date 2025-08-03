import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <PulseLoader color="#007bff" size={15} />
    </div>
  );
};

export default Loading;