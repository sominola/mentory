/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import NoProtectedRoute from '@/components/shared/guards/no-protected.guard.tsx';
import { AppRoute } from '@/common/enums/enums';

const App = lazy(() => import('@/App.tsx'));
const SignUpPage = lazy(() => import('@/pages/auth/sign-up.page.tsx'));
const SignInPage = lazy(() => import('@/pages/auth/sign-in.page.tsx'));

export const routes: RouteObject[] = [
  {
    path: AppRoute.ROOT,
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: AppRoute.SIGN_IN,
        element: (
          <NoProtectedRoute>
            <SignInPage />
          </NoProtectedRoute>
        ),
      },
      {
        path: AppRoute.SIGN_UP,
        element: (
          <NoProtectedRoute>
            <SignUpPage />
          </NoProtectedRoute>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
