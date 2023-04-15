import React, { useRef } from "react";
// import "./HorizontalList.css";

export default function HorizontalList() {
  const containerRef = useRef();

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="containerr">
      <div className="list-container" ref={containerRef}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="list-item"></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={scrollLeft} className="button">
          &lt;
        </button>
        <button onClick={scrollRight} className="button">
          &gt;
        </button>
      </div>
    </div>
  );
}
