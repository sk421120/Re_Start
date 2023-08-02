export default function App({ counter }) {
  let h = 0;
  let m = 0;
  let s = 0;

  if (counter >= 60) {
    m = parseInt(counter / 60);
    s = counter % 60;

    if (m >= 60) {
      h = parseInt(m / 60);
      m = m % 60;
    }
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <h4>
        {h} hour {m} minute {s} second times
      </h4>
    </>
  );
}
