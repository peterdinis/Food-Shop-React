import React from 'react';

export const LoginPage = React.lazy(() => import('./LoginPage'));
export const RegisterPage = React.lazy(() => import('./RegisterPage'));
export const ProfilePage = React.lazy(() => import('./ProfilePage'));
export const ForgotPasswordPage = React.lazy(
  () => import('./ForgotPasswordPage')
);
export const ResetPasswordPage = React.lazy(
  () => import('./ResetPasswordPage')
);
