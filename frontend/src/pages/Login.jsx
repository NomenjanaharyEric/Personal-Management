import React from 'react';
import { Button, Divider, Form, Input, Layout, notification, Typography } from "antd";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useMutation } from 'react-query';
import userServices from '../services/UserServices';

const { Content } = Layout;
const { Title } = Typography;

const Login = () => { 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {mutate: loginUser } = useMutation((user) => userServices.loginUser(user), {
    onSuccess: () => {
      notification.success({
        message: "Vous êtes connecté avec votre compte"
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  const onFinish = async(values) => {
    const user = {
      email: values.email,
      password: values.password
    };
    loginUser(user);
  }

  return (
    <Content style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Content style={{
        border:"1px solid black",
        padding:"4rem",
        marginTop:"12rem"
      }}>
        <Title level={2}>Formulaire de Connexion</Title>
        <Divider/>
        <Form onFinish={onFinish}>
          <Form.Item 
            label="Adresse email"
            name="email"
            rules={[
              {
                required: true,
                message: "Merci d'entrer votre adresse email"
              },
              {
                type: "email",
                message: "Merci d'entrer un adresse email valide"
              }
            ]}
            hasFeedback
          >
            <Input name='email' value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Item>
          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              {
                required: true,
                message: "Merci d'entrer votre mot de passe"
              }
            ]}
            hasFeedback
          >
            <Input.Password name='email' value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Se connecter
            </Button>
          </Form.Item>
        </Form>
        <Divider>
          <NavLink to={"/register"}>Créer un compte</NavLink>
        </Divider>
      </Content>
    </Content>
  )
}

export default Login;
