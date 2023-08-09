const nextId = 0;
export function noteReducer(state, action) {
  switch (action.type) {
    case "add_friend": {
      return {
        ...state,
        id: nextId++,
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
        message: "",
      };
    }
    default: {
      throw Error("Unknown action : " + action.type);
    }
  }
}
