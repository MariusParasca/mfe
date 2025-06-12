import { AppShell } from "@repo/ui/AppShell";
import "./App.css";

import React from "react";
import { MoviesContent } from "./MoviesContent";

const App = () => {
  return (
    <AppShell
      title='Movies'
      colorScheme='light'
      routes={[
        {
          path: "/",
          element: () => <MoviesContent />,
        },
        {
          path: "/playlist",
          element: () => <div>Playlist Page</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
      ]}
    />
  );
};

export default App;
