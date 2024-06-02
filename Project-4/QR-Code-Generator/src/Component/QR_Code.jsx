import { useState } from "react";
import QRCode from "react-qr-code";
import "./QR_Code.css";

export default function QR_Code() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateCode() {
    setQRCode(input);
  }
  return (
    <div className="Content">
      <h2>QR Code Generator</h2>
      <div className="Field">
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateCode}
        >
          Generate
        </button>
      </div>
      <div className="QR">
        <QRCode id="qr-code" value={qrCode} size={350} />
      </div>
    </div>
  );
}
