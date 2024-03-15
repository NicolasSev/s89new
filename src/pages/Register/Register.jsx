import { Button, Card, Form, Image, Input, InputNumber } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { signUp, confirmSignUp } from '@aws-amplify/auth';
import notification from 'antd/es/notification/index.js';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import logo from '../../assets/s89.svg';
import style from './Register.module.css';

function MailOutlined() {
  return null;
}

export default function Register() {
  const navigate = useNavigate();
  const [stage, setStage] = useState('register');
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);

  const onFinish = async ({ email, username, password }) => {
    setUserName(username);
    let response;
    try {
      response = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });
    } catch (e) {
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка при регистрации',
        placement: 'topRight',
        className: 'notification',
      });
    }
    if (response.nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
      setStage('confirm');
      notification.success({
        message: 'Успех!',
        description: `Мы отправили код на адрес ${email}`,
        placement: 'topRight',
        className: 'notification',
      });
    }
  };

  const onFinishConfirm = async ({ code }) => {
    let response;
    try {
      response = await confirmSignUp({
        username: userName,
        confirmationCode: code,
      });
    } catch (e) {
      notification.error({
        message: 'Ошибка',
        description: 'Произошла ошибка подтверждения',
        placement: 'topRight',
        className: 'notification',
      });
    }
    if (response.isSignUpComplete) {
      navigate('/login');
      notification.success({
        message: 'Успех!',
        description: 'Вы можете авторизоваться',
        placement: 'topRight',
        className: 'notification',
      });
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
        className={style.register_wrapper}
        styles={{ body: { padding: '50px' } }}
      >
        <div className={style.register_title}>Регистрация</div>
        <div className={style.register_subtitle}>Сеть фитнес клубов S89</div>
        {stage === 'register' ? (
          <Form className={style.register_form} onFinish={onFinish}>
            <div className={style.register_label}>E-mail</div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите e-mail!',
                },
              ]}
            >
              <Input
                className={style.register_input}
                prefix={<MailOutlined />}
                placeholder="Введите ваш e-mail"
              />
            </Form.Item>
            <div className={style.register_label}>Логин</div>
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
                className={style.register_input}
                prefix={<UserOutlined />}
                placeholder="Введите ваш логин"
              />
            </Form.Item>
            <div className={style.register_label}>Пароль</div>
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
                className={style.register_input}
                prefix={<LockOutlined />}
                placeholder="Введите ваш пароль"
              />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
                className={style.register_submit}
              >
                Зарегистрироваться
              </Button>
              <Link to="/login">Авторизоваться</Link>
            </Form.Item>
          </Form>
        ) : (
          <Form className={style.register_form} onFinish={onFinishConfirm}>
            <div className={style.register_label}>Код</div>
            <Form.Item name="code">
              <Input
                type="number"
                className={style.register_input}
                prefix={<LockOutlined />}
                placeholder="Введите код"
                controls={false}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={style.register_submit}
              >
                Подтвердить
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
}
