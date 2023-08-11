export default function InsertFrnd() {
  let name = "";

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          name = e.targe.value;
        }}
      />
      <button>Add</button>
    </>
  );
}
