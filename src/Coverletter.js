import React from "react";
import Textform from "./Textform";
import "./Coverletter.css";

export const Coverletter = () => {
  return (
    <div className="d-flex flex-row mb-2">
      <Textform className="coverletter" heading="Make changes and save your cover letter" />


      <div className="secondrow">
        <div className="cardview">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>
        </div>

        </div>

        </div>
  );
};