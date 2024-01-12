import PageLoader from "@/components/atoms/loaders/page-loader";
import RootTemplate from "@/components/templates/root-template";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootTemplate />}>
      <Route
        index
        lazy={async () => {
          const HomePage = await import("@/components/pages/home-page");
          return { Component: HomePage.default };
        }}
      />
      <Route
        path="favorites"
        lazy={async () => {
          const FavoritesPage = await import(
            "@/components/pages/favorites-page"
          );
          return { Component: FavoritesPage.default };
        }}
      />
    </Route>,
  ),
);

const RouterProviderWrapper = () => {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<PageLoader />} />
    </>
  );
};

export default RouterProviderWrapper;
