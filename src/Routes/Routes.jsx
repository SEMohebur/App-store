import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApp from "../Pages/AllApp";
import InstalledAppPage from "../Pages/InstalledAppPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      { index: true, Component: Home },
      { path: "/app", Component: AllApp },
      { path: "/installedApp", Component: InstalledAppPage },
    ],
  },
]);
