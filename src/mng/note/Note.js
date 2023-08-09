export default function Note({ friend, message, dispatch }) {
  return (
    <section>
      <textarea
        value={message}
        placeholder={"Note to " + friend.name}
        onChange={(e) => {
          message = e.target.value;
        }}
      />
      <br />
      <button>Note to {friend.name}</button>
    </section>
  );
}
