import React, { FC, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { Button, Layout, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth/action-cretors';
import Loader from './components/Loader';
import { messageAction } from './store/chat/action-creators';

const App: FC = () => {
  const { isAuth, isLoading } = useTypedSelector((state) => state.auth);
  const username: string | null = sessionStorage.getItem('username');
  const dispatch = useDispatch();

  let newData: string[] = [];

  const logoutHandler = (): void => {
    const data: string[] = JSON.parse(localStorage.getItem('users') || '');

    if (username) {
      newData = data.filter((item: string) => item !== username);
    }
    localStorage.setItem('users', JSON.stringify(newData));
    dispatch(authActions.logout());
  };

  window.onbeforeunload = logoutHandler;

  useEffect(() => {
    dispatch(messageAction.getMessageThunk());
    if (username) {
      dispatch(authActions.login(username));
    }
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <Header className="title">
        {isAuth ? (
          <Row justify="end">
            <Button type={'primary'} onClick={logoutHandler}>
              Logout
            </Button>
          </Row>
        ) : (
          <Row justify="center">Welcome to Chatique</Row>
        )}
      </Header>
      <AppRoutes auth={isAuth} />
    </Layout>
  );
};

export default App;
