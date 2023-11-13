/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom';
import { AppRoute } from '@/common/enums/enums';

const App = lazy(() => import('@/App.tsx'));
const SignUpPage = lazy(() => import('@/pages/auth/sign-up.page.tsx'));
const SignInPage = lazy(() => import('@/pages/auth/sign-in.page.tsx'));
const MentorsPage = lazy(() => import('@/pages/metnors/mentors.page'));
const MentorPage = lazy(() => import('@/pages/metnors/mentor.page'));
const AccountPage = lazy(() => import('@/pages/account/account.page'));
const AccountFormaPage = lazy(() => import('@/pages/account/account-forma.page'));
const MeetingsPage = lazy(() => import('@/pages/meetings/meetings.page'));
const MeetingsUpcomingPage = lazy(() => import('@/pages/meetings/upcoming.page'));
const MeetingsPendingPage = lazy(() => import('@/pages/meetings/pending.page'));
const MeetingsHistoryPage = lazy(() => import('@/pages/meetings/history.page'));

export const routes: RouteObject[] = [
  {
    path: AppRoute.ROOT,
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: AppRoute.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: AppRoute.SIGN_UP,
        element: <SignUpPage />,
      },
      {
        path: AppRoute.MENTORS,
        element: <MentorsPage />,
      },
      {
        path: AppRoute.MENTOR,
        element: <MentorPage />,
      },
      {
        path: AppRoute.ACCOUNT,
        element: <AccountPage />,
        children: [
          {
            index: true,
            element: <AccountFormaPage />,
          },
        ],
      },
      {
        path: AppRoute.MEETINGS,
        element: <MeetingsPage />,
        children: [
          {
            index: true,
            loader: () => redirect(AppRoute.MEETINGS_UPCOMING),
          },
          { path: AppRoute.MEETINGS_UPCOMING, element: <MeetingsUpcomingPage /> },
          { path: AppRoute.MEETINGS_PENDING, element: <MeetingsPendingPage /> },
          { path: AppRoute.MEETINGS_HISTORY, element: <MeetingsHistoryPage /> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
