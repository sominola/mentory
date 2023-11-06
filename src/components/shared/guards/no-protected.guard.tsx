import { AppRoute } from '@/common/enums/enums';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ValueOf<T> = T[keyof T];
type Properties = {
  children: ReactNode;
  redirectPath?: ValueOf<typeof AppRoute>;
};

const NoProtectedRoute: React.FC<Properties> = ({ children, redirectPath = AppRoute.ROOT }: Properties) => {
  const hasAuthenticatedUser = localStorage.getItem('access_token') != null;

  if (!hasAuthenticatedUser) {
    return <>{children}</>;
  }
  return <Navigate to={redirectPath} replace />;
};

export default NoProtectedRoute;
