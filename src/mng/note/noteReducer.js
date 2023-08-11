const nextFId = 0;
const nextNId = 0;

export function noteReducer(state, action) {
  switch (action.type) {
    case "add_friend": {
      return {
        ...state,
        id: nextFId++,
        name: action.name,
      };
    }
    case "change_selection": {
      return {
        ...state,
        selectedId: action.friendId,
      };
    }
    case "edit_note": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "post_note": {
      return {
        ...state,
        id: nextNId++,
        selectedId: action.friendId,
        note: action.note,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action : " + action.type);
    }
  }
}
