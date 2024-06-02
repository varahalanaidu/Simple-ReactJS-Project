import { useEffect, useState } from "react";
import "./Random_Generator.css";

export default function Random_Generator() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function colorRandom(len) {
    return Math.floor(Math.random() * len);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorRandom(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = colorRandom(256);
    const g = colorRandom(256);
    const b = colorRandom(256);

    console.log({ r }, { g }, { b });
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="Mybutton" style={{ background: color, height: "100vh" }}>
      <button onClick={() => setTypeColor("hex")}>HEX COLOR</button>
      <button onClick={() => setTypeColor("rgb")}>RGB COLOR</button>
      <button
        onClick={
          typeColor == "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        GENERATE RANDOM COLOR
      </button>

      <div className="Content" style={{ color: "white" }}>
        <h1>{typeColor == "rgb" ? "RGB COLOR" : "HEX COLOR"}</h1>
      </div>
    </div>
  );
}
