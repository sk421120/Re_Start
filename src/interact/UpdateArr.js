import { useImmer } from "use-immer";
import AddMemo from "./AddMemo.jsx";
import MemoList from "./MemoList.jsx";

export default function UpdateArr() {
  const [memos, updateMemos] = useImmer([]);

  function handleAddTitle(title) {
    updateMemos((draft) => {
      draft.push({
        id: memos.length,
        title: title,
      });
    });
  }

  function handleChangeMemo(nextMemo) {
    updateMemos(
      memos.map((memo) => {
        if (memo.id === nextMemo.id) {
          return nextMemo;
        } else {
          return memo;
        }
      })
    );
  }

  function handleDeleteMemo(memoId) {
    updateMemos(memos.filter((m) => m.id !== memoId));
  }

  return (
    <div>
      <AddMemo onAddTitle={handleAddTitle} />
      <MemoList
        memos={memos}
        onChangeMemo={handleChangeMemo}
        onDeleteMemo={handleDeleteMemo}
      />
    </div>
  );
}
