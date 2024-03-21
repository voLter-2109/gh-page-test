import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/not-found/Error";
import About from "./pages/post/Post";
import { HOME_PATH } from "./type/constants";

export default function App() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/gh-page-test/:postId"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
