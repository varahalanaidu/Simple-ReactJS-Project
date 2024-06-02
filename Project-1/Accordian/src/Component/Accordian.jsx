import React, { useState } from "react";
import data from "./Data";
import "./Accordian.css";

function Accordion() {
  const [active, setActive] = useState(null);

  function handleSingleClick(getCurrentId) {
    setActive(getCurrentId === active ? null : getCurrentId);
  }

  return (
    <div className="Wrapper">
      <div className="Header">
        An Accordion Is A User Interface Component That Allow User To Expand And
        Collapse Section Of Content. Each Section Usually Has A Header That Can
        Be Clicked To Reveal Or Hide The Content.
      </div>
      <div className="Main">
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="Item">
              <div className="Title">
                <h3>{dataItem.question}</h3>
                <span onClick={() => handleSingleClick(dataItem.id)}>+</span>
              </div>

              {active === dataItem.id ? (
                <div className="Content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
