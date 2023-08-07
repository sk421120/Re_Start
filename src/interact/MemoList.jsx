import { useState } from "react";

function MemoD({ memo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let memoContent;

  if (isEditing) {
    memoContent = (
      <>
        <input
          value={memo.title}
          onChange={(e) => {
            onChange({ ...memo, title: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    memoContent = (
      <>
        {memo.title + " "}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      {memoContent}
      <button onClick={() => onDelete(memo.id)}>Delete</button>
    </label>
  );
}

export default function MemoList({ memos, onChangeMemo, onDeleteMemo }) {
  return (
    <ul>
      {memos.length > 0
        ? memos.map((memo) => (
            <li key={memo.id}>
              <MemoD
                memo={memo}
                onChange={onChangeMemo}
                onDelete={onDeleteMemo}
              />
            </li>
          ))
        : "등록된 메모가 없습니다."}
    </ul>
  );
}
