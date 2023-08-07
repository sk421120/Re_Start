import { useState } from "react";

export default function SnapShot() {
  // executing function -> calculating snapshot ( change? ) -> update DOM
  // state update -> snapshot of state value to component

  const [onOff, setOnOff] = useState(true);

  function handleOnOff() {
    setOnOff(!onOff);
    alert((onOff ? "On" : "Off") + " is Next.");
  }

  return (
    <>
      <p>state 는 컴포넌트마다 개별적으로 유지된다.</p>
      <button onClick={handleOnOff}>{onOff ? "On!" : "Off!!"}</button>
      <h1>{onOff ? "Off" : "On"} Is Now.</h1>
    </>
  );
}
