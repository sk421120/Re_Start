import "./styles.css";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.js";
import Main from "./Main.js";

const root = hydrateRoot(document.getElementById("root"), <App counter={0} />);
const main = createRoot(document.getElementById("main"));

let i = 0;
setInterval(() => {
  root.render(<App counter={i++} />);
}, 1000);

main.render(<Main />);
