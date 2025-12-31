import { Analytics } from "@vercel/analytics/react";
import Body from "./Containers/Body/Body";

import "./App.css";

function App() {
  return (
    <>
      <Body />
      <Analytics />
    </>
  );
}

export default App;
