import { useReducer } from "react";
import { Friends } from "./note/Friends.js";
import { Note } from "./note/Note.js";
import { noteReducer } from "./note/noteReducer.js";

/*
컴포넌트 마다 반복적인 코드를 줄이기 위한 함수
 */
export default function Reduce() {
  return (
    <>
      <h1>쪽지 남기기</h1>
      <div></div>
    </>
  );
}
