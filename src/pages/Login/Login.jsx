import { Button, Card, Form, Image, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signIn } from '@aws-amplify/auth';
import { Link, useNavigate } from 'react-router-dom';
import notification from 'antd/es/notification';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import style from './Login.module.css';
import logo from '../../assets/s89.svg';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const onFinish = async ({ username, password }) => {
    let response;
    try {
      response = await signIn({
        username,
        password,
        options: {
          autoSignIn: true,
        },
      });
    } catch (e) {
      notification.error({
        message: 'Ошибка',
        description: 'Неверный логин или пароль',
        placement: 'topRight',
        className: 'notification',
      });
    }
    if (response.isSignedIn) {
      navigate('/');
    }
  };

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        if (response) {
          setUser(response);
        } else {
          setUser(null);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/statistics');
    }
  }, [user]);

  return (
    <div className={style.layout}>
      <Image src={logo} preview={false} width={140} className={style.logo} />
      <Card
        className={style.login_wrapper}
        styles={{ body: { padding: '50px' } }}
      >
        <div className={style.login_title}>Вход</div>
        <div className={style.login_subtitle}>Сеть фитнес клубов S89</div>
        <Form className={style.login_form} onFinish={onFinish}>
          <div className={style.login_label}>Логин</div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите логин!',
              },
            ]}
          >
            <Input
              className={style.login_input}
              prefix={<UserOutlined />}
              placeholder="Введите ваш логин"
            />
          </Form.Item>
          <div className={style.login_label}>Пароль</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите пароль!',
              },
            ]}
          >
            <Input.Password
              className={style.login_input}
              prefix={<LockOutlined />}
              placeholder="Введите ваш пароль"
            />
          </Form.Item>

          <Form.Item
            style={{
              textAlign: 'center',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className={style.login_submit}
            >
              Войти
            </Button>
            <Link to="/register">Регистрация...</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
