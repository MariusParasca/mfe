import { AppShell as MantineAppShell, MantineProvider, Text, Title } from "@mantine/core";
import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import { useStore } from "@repo/store";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

export const MainLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        display: "block",
        padding: "10px",
        fontWeight: isActive ? "bold" : "normal",
      })}
    >
      {children}
    </NavLink>
  );
};

export const AppShell = ({
  title,
  colorScheme,
  routes,
  navLinks,
}: {
  title: string;
  colorScheme: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}) => {
  const { movies } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider defaultColorScheme={colorScheme}>
        <MantineAppShell
          header={{
            height: 60,
          }}
          navbar={{
            width: 150,
            breakpoint: "sm",
          }}
          padding='md'
        >
          <MantineAppShell.Header
            p='xs'
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Title>{title}</Title>
            <Text size='xl'>{movies.length} selected</Text>
          </MantineAppShell.Header>

          <MantineAppShell.Navbar p='md'>
            {navLinks.map((link) => (
              <MainLink to={link.path} key={link.path}>
                {link.label}
              </MainLink>
            ))}
          </MantineAppShell.Navbar>

          <MantineAppShell.Main>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
              <Route path='*' element={<div>Not Found</div>} />
            </Routes>

            <Outlet />
          </MantineAppShell.Main>
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
