import React, { useState } from "react";
import Card from "./component/Card";

export default function App() {
  console.log("hello world");
  const [count, setCount] = useState(0);
  return (
    <>
      <Card />
    </>
  );
}
