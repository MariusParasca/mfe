import { AppShell } from "@repo/ui/AppShell";
import "./App.css";

import React from "react";
import { MoviesContent } from "@repo/movies-content/MoviesContent";
import { PlaylistContent } from "@repo/playlist-content/PlaylistContent";

const App = () => {
  return (
    <AppShell
      title='Playlist'
      colorScheme='dark'
      routes={[
        {
          path: "/",
          element: () => <MoviesContent />,
        },
        {
          path: "/playlist",
          element: () => <PlaylistContent />,
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
