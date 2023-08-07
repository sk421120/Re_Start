import { useState } from "react";

export default function QueState() {
  const [number, setNumber] = useState(0);
  // state 사용시 한번에 동시의 코드를 실행할 경우 렌더링 될 때 state가 고정된 동일한 결과값이 나오게된다.
  // state의 값이 고정되지 않고 유지시키려면 다음과 같은 코드를 사용할 수 있다.

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber((a) => a + 2);
        }}
      >
        + 3
      </button>
      <button
        onClick={() => {
          setNumber((c) => c * 2);
        }}
      >
        x 2
      </button>
    </>
  );
}
