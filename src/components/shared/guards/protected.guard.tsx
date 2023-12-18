import { AppRoute } from '@/common/enums/enums';
import { ReactNode, FC } from 'react';
import { Navigate } from 'react-router-dom';

type ValueOf<T> = T[keyof T];
type Properties = {
  children: ReactNode;
  redirectPath?: ValueOf<typeof AppRoute>;
};

const ProtectedRoute: FC<Properties> = ({ children, redirectPath = AppRoute.SIGN_IN }: Properties) => {
  const hasAuthenticatedUser = localStorage.getItem('user') != null;

  if (!hasAuthenticatedUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
