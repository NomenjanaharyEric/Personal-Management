import React, { useState } from 'react';
import { Button, Divider, Form, Input, Layout, notification, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import  { useMutation, useQueryClient } from "react-query";
import UserServices from "../services/UserServices";

const { Content } = Layout;
const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();
  
  const { mutate: createUser } = useMutation((user) => UserServices.regiserUser(user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      notification.success({
        message: "Compte utilisateur créer avec success",
        description: "Votre compte a été créer avec success"
      });
      navigate("/");
    }
  });

  const onFinish = async(values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    createUser(user);
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
                marginTop:"12rem",
                borderRadius:"10px"
      }}>
        <Title level={3}>Formulaire de Registration</Title>
        <Divider/>
        <Form onFinish={onFinish}>
          <Form.Item label="Nom" name="name" rules={[
            {
              required: true,
              message: "Ce champ est obligatoire"
            },
            {
              type:'string',
              message: "Nom invalide"
            },
          ]} hasFeedback>
            <Input name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item >
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
            <Input name='name' value={email} onChange={(e) => setEmail(e.target.value)}/>
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
            <Input.Password name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Créer mon compte
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Content>
  )
}

export default Register
