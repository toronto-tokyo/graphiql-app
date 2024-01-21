import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from 'layouts/RootLayout';
import WelcomePage from 'pages/WelcomePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import AuthPrivateRoute from 'hoc/AuthPrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/main"
          element={
            <AuthPrivateRoute>
              <MainPage />
            </AuthPrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);

export default router;
