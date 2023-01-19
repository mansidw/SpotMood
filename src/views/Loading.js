import React from "react";
import "../assets/css/Loading.css";

const LoadingView = (props) => {
  return (
    <div id="loaderSvgWrapper">
      <svg
        xmlnsSvg="www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewbox="0 0 200 200"
        id="preloader"
      >
        <circle cx="100" cy="100" r="3" id="red" />
        <circle cx="100" cy="100" r="8" id="orange" />
        <circle cx="100" cy="100" r="13" id="yellow" />
        <circle cx="100" cy="100" r="18" id="green" />
      </svg>
    </div>
  );
};

export default LoadingView;
