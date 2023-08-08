import { useState } from "react";
import AddItem from "./AddItem.js";
import PackingList from "./PackingList.js";

/*
* state 구조화
 - 관련 state 그룹화
 - state의 모순 피하기
 - 불필요한 state 피하기
 - state 중복 피하기
 - 깊게 중첩된 state 피하기
*/

let nextId = 0;
export default function Choose() {
  const [items, setItems] = useState([]);

  //   const [mine, setMine] = useState([]);
  //   let packed = mine.length;

  const [mine, setMine] = useState(new Set());
  let packed = mine.size;

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function setMyBag(toggledId) {
    if (mine.has(toggledId)) {
      mine.delete(toggledId);
    } else {
      mine.add(toggledId);
    }
  }

  function setMyBag_useState(toggledId) {
    if (mine.includes(toggledId)) {
      setMine(mine.filter((id) => id !== toggledId));
    } else {
      setMine([...mine, toggledId]);
    }
  }

  function handleChangeItem(nextItem) {
    setMyBag(nextItem.id);
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    mine.delete(itemId);
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {items.length} packed!
      </b>
      <hr />
      <h2>My Bag List</h2>
      <ul>
        {items.map((item) => {
          //   if (mine.includes(item.id)) {
          if (mine.has(item.id)) {
            return <li>{item.title}</li>;
          }
        })}
      </ul>
    </>
  );
}
