import { AppShellHeader, AppShell as MantineAppShell, MantineProvider, Title } from "@mantine/core";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export const AppShell = ({
  title,
  colorScheme,
  routes,
}: {
  title: string;
  colorScheme: "light" | "dark";
  routes: Route[];
}) => {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalClasses forceColorScheme={colorScheme}>
        <MantineAppShell>
          <AppShellHeader>
            <Title>{title}</Title>
          </AppShellHeader>

          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
