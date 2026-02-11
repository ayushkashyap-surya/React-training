import React, { useState } from "react";
import CardList from "./CardList";

export default function App() {
  console.log("hello world");
  const [count, setCount] = useState(0);
  return (
    <>
      <CardList />
    </>
  );
}
