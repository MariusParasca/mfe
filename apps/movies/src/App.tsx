import { AppShell } from "@repo/ui/AppShell";
import "./App.css";

import React from "react";

const App = () => {
  return (
    <AppShell
      title='Movies'
      colorScheme='light'
      routes={[
        {
          path: "/",
          element: () => <div>Welcome to the Movies App</div>,
        },
      ]}
    />
  );
};

export default App;
