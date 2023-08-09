export default function Friends({ friends, selectedId, dispatch }) {
  return (
    <section>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <button>
              {selectedId === friend.id ? <b>{friend.name}</b> : friend.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
