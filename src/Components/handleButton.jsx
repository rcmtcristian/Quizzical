import React from "react";
import "./button.css";

function handleButton() {
  return (
    <div>
      <section className="content">
        <div className="box">
          <button className="cta">
            <a href="#">Click me</a>
            <span className="shape">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default handleButton;
