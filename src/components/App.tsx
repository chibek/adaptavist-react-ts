import React, { FC } from "react";

import "@Styles/index.css";

const App: FC = () => {
  const hola = {
    a: "Hello World",
  };

  return <h1>{hola?.a}</h1>;
};

export default App;
