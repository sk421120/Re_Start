import { useReducer } from "react";
import { InsertFrnd } from "./note/InsertFrnd.js";
import { Friends } from "./note/Friends.js";
import { Note } from "./note/Note.js";
import { noteReducer } from "./note/noteReducer.js";

/*
컴포넌트 마다 반복적인 코드를 줄이기 위한 함수
 */
export default function Reduce() {
  const [state, dispatch] = useReducer(noteReducer, []);
  const note = state.note;
  // const friend = friends.find(f => f.id === state.selectedId);

  return (
    <>
      <h1>쪽지 남기기</h1>
      <div>
        <Friends
          friends={friends}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Note key={friend.id} note={note} friend={friend} dispatch={dispatch} />
      </div>
    </>
  );
}

function AddFriend(){
  return (
    <>
      <InsertFrnd />
    </>
  )
}
