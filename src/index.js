import "./styles.css";
import { hydrateRoot } from "react-dom/client";
import App from "./App.js";

const root = hydrateRoot(document.getElementById("root"), <App counter={0} />);

let i = 0;
setInterval(() => {
  root.render(<App counter={i++} />);
}, 1000);
