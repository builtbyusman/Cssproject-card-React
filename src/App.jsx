import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="card">
      <div className="c-fr">
        <div className="cfr-fr">
          <img src="/12.png" alt="Master Card" id="m12" />
          <p className="text">Master Card</p>
        </div>
        <div className="cfr-sc">
          <img src="/13.png" alt="Chip" id="m13" />
        </div>
      </div>

      <div className="c-sc">
        <p className="text2">Card Number</p>
        <p className="text">8050 5040 2030 3020</p>
      </div>

      <div className="c-tr">
        <div className="ctr-fr">
          <p className="text">Prem Kumar Shahi</p>
        </div>
        <div className="ctr-sc">
          <p className="text2">Valid Thru</p>
          <p className="text">05/28</p>
        </div>
      </div>
    </div>
  );
}