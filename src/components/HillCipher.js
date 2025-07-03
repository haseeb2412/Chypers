// components/HillCipher.js
import React, { useState } from "react";
import "../App.css";

const HillCipher = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleEncrypt = () => {
    const matrix = [
      [3, 3],
      [2, 5],
    ];
    let cleanText = text.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanText.length % 2 !== 0) cleanText += "x";

    const mod26 = (n) => ((n % 26) + 26) % 26;

    let output = "";
    for (let i = 0; i < cleanText.length; i += 2) {
      const a = cleanText.charCodeAt(i) - 97;
      const b = cleanText.charCodeAt(i + 1) - 97;
      const x = mod26(matrix[0][0] * a + matrix[0][1] * b);
      const y = mod26(matrix[1][0] * a + matrix[1][1] * b);
      output += String.fromCharCode(x + 97) + String.fromCharCode(y + 97);
    }

    setResult(output);
  };

  return (
    <div className="container">
      <h2>🔢 Hill Cipher</h2>
      <div className="form-table">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <p className="result">Result: {result}</p>
      </div>
    </div>
  );
};

export default HillCipher;
