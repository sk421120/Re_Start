import { useState } from "react";
import { msgList } from "./data.js";

export default function CmpMem() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    let nextIdx = index;

    if (index + 2 > msgList.length) {
      nextIdx = 0;
    } else {
      nextIdx++;
    }

    setIndex(nextIdx);
  }

  function handlePrevClick() {
    let prevIdx = index;

    if (index - 1 < 0) {
      prevIdx = msgList.length - 1;
    } else {
      prevIdx--;
    }

    setIndex(prevIdx);
  }

  let msg = msgList[index];

  return (
    <>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{msg.name}</i>
      </h2>
      <h3>
        ({index + 1} of {msgList.length})
      </h3>
      <p>{msg.description}</p>
      <p>{msg.alt}</p>
    </>
  );
}
