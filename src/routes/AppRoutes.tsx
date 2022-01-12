import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IRoutesProps, RoutesEnum } from '../types';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/LoginPage';

const AppRoutes: FC<IRoutesProps> = ({ auth }) => (
  <>
    {auth ? (
      <Routes>
        <Route path={RoutesEnum.CHAT} element={<ChatPage />} />
        <Route path={'*'} element={<Navigate to={RoutesEnum.CHAT} />} />
      </Routes>
    ) : (
      <Routes>
        <Route path={RoutesEnum.LOGIN} element={<LoginPage />} />
        <Route path={'*'} element={<Navigate to={RoutesEnum.LOGIN} />} />
      </Routes>
    )}
  </>
);

export default AppRoutes;
