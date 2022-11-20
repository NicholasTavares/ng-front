import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const PublicRoute = lazy(() => import("./components/PublicRoute"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
