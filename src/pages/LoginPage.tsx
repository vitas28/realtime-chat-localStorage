import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { authActions, errorAction } from '../store/auth/action-cretors';
import { Button, Form, Input, Layout, Row, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const [localUsername, setUsername] = useState<string>('');
  const [localUsers, setLocalUsers] = useState<string[]>([]);
  const { error } = useTypedSelector((state) => state.auth);

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const data: string[] = JSON.parse(localStorage.users) || [];

  const loginHandler = (): void => {
    const result = data.every((item) => item !== localUsername);
    if (data !== []) {
      if (result && data) {
        setLocalUsers((prevState: string[]) => [...prevState, localUsername]);
        dispatch(authActions.login(localUsername));
      } else {
        setUsername('');
        dispatch(
          errorAction(
            'Some user have an active session with this username. Try some other'
          )
        );
      }
    } else {
      setLocalUsers((prevState: string[]) => [...prevState, localUsername]);
      dispatch(authActions.login(localUsername));
    }
  };

  useEffect(() => {
    localStorage.setItem(
      'users',
      JSON.stringify([...data, ...localUsers] || [])
    );
  }, [loginHandler]);

  return (
    <Layout>
      <Content className="content">
        <Form className="form" onFinish={loginHandler}>
          {error && <h1 className="error">{error}</h1>}
          <Row justify="center" align="middle">
            <Form.Item>
              <Input
                value={localUsername}
                onChange={usernameHandler}
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Enter your username">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
              <Row justify="end">
                <Button type={'primary'} htmlType={'submit'}>
                  Submit
                </Button>
              </Row>
            </Form.Item>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
};

export default LoginPage;
