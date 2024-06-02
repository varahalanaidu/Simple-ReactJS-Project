import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";
export default function Rating({ Star = 5 }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getIndex) {
    setRate(getIndex);
  }

  function handleMouseEnter(getIndex) {
    setHover(getIndex);
  }

  function handleMouseLeave() {
    setHover(rate);
  }
  return (
    <div className="Main">
      <div className="Content">
        Star Rating Is A User Interface Component That Allow User To Rate An
        Item, Service, Or Experience By Selecting A Number Of Star And Each Star
        Typically Represent A Level Of Satisfaction With A Common Scale Ranging
        From One To Five Star.
      </div>
      {[...Array(Star)].map((_, index) => {
        index = index + 1;
        return (
          <div className="Star">
            <FaStar
              key={index}
              className={index <= (hover || rate) ? "Active" : "Inactive"}
              size={30}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </div>
        );
      })}
    </div>
  );
}
