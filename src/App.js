import Title from "./components/Title";
import ShowColorBackground from "./components/ShowColorBackground";
import SearchColor from "./components/SearchColor";
import { useState } from "react";

function App() {
  const [colorBg, setColorBg] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Title />
        <ShowColorBackground colorBg={colorBg} />
        <SearchColor colorBg={colorBg} setColorBg={setColorBg} />
      </div>
    </div>
  );
}

export default App;
