// components/ColumnarCipher.js
import React, { useState } from "react";
import "../App.css";

const ColumnarCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("3124");
  const [result, setResult] = useState("");

  const handleEncrypt = () => {
    const numCols = key.length;
    const numRows = Math.ceil(text.length / numCols);
    let matrix = Array.from({ length: numRows }, () =>
      new Array(numCols).fill(" ")
    );

    let index = 0;
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (index < text.length) {
          matrix[i][j] = text[index++];
        }
      }
    }

    let sortedKey = [...key]
      .map((k, i) => [parseInt(k), i])
      .sort((a, b) => a[0] - b[0]);

    let output = "";
    for (let [_, colIndex] of sortedKey) {
      for (let i = 0; i < numRows; i++) {
        output += matrix[i][colIndex];
      }
    }

    setResult(output);
  };

  return (
    <div className="container">
      <h2>📊 Columnar Cipher</h2>
      <div className="form-table">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter numeric key (e.g. 3124)"
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <p className="result">Result: {result}</p>
      </div>
    </div>
  );
};

export default ColumnarCipher;
