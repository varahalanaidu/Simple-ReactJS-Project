import { useState } from "react";
import Modal from "./Modal";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  function handleModalPopup() {
    setShowPopup(!showPopup);
  }
  return (
    <div className="Main-1">
      <button onClick={handleModalPopup}>Open Modal Popup</button>
      {showPopup && <Modal />}
    </div>
  );
}
