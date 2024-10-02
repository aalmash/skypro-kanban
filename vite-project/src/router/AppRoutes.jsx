import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { NotFound } from "../pages/NotFound/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useState } from "react";
import { CardPage } from "../pages/CardPage/CardPage";

export const AppRoutes = ({ changeTheme, setChangeTheme }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route
            path={routes.main}
            element={
              <MainPage
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
              />
            }
          >
            <Route path={routes.exit} element={<ExitPage setIsAuth={setIsAuth} />} />
            <Route path={routes.card} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={routes.notFound} element={<NotFound />} />
        <Route
          path={routes.login}
          element={<LoginPage setIsAuth={setIsAuth} />}
        />
        <Route path={routes.register} element={<RegistrationPage />} />
        <Route path={routes.exit} element={<ExitPage />} />
      </Routes>
    </BrowserRouter>
  );
};
