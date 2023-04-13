import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="load">
      <div class="load-wrapp">
        <div class="load-3">
          {/* <p>Loading 3</p> */}
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
}
