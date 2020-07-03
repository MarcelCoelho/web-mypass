import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import { Container, ContentFormImage, AnimationContainer } from './styles';
import { IoIosArrowDropleft } from 'react-icons/io';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErros';

import Header from '../../components/header';
import Input from '../../components/input';
import InputPassword from '../../components/inputPassword';
import Button from '../../components/button';

interface IRegisterParams {
  id: string;
}

interface IRegister {
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id?: string;
}

const Register: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const history = useHistory();

  const { params } = useRouteMatch<IRegisterParams>();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [url_photo, setPhoto] = useState<string>('');
  const [userRegister, setUserRegister] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { user } = useAuth();
  let registerId: string;

  useEffect(() => {
    api.get(`register/${params.id}`).then(response => {

      if (response && response.data) {

        registerId = response.data.id;
        setName(response.data.name);
        setDescription(response.data.description);
        setUrl(response.data.url);
        setPhoto(response.data.url_photo);
        setUserRegister(response.data.user);
        setPassword(response.data.password);
      }
    });

  }, [setName, setDescription, setUrl, setPhoto, setUserRegister, setPassword])

  const handleSubmit = useCallback(
    async (data: IRegister) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          user: Yup.string().required('Usuario/Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        let messageTitle: string;
        let messageDescription: string;

        data.user_id = user.id;
        console.log(data.user_id);
        if (registerId === params.id) {
          await api.put(`/registers/${registerId}`, data);
          messageTitle = "Registro atualizado!";
          messageDescription = `${data.name} atualizado com sucesso.`
        }
        else {
          await api.post('/registers', data);
          messageTitle = "Cadastro realizado!";
          messageDescription = `${data.name} criado com sucesso.`
        }

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: messageTitle,
          description: messageDescription,
        });
      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description: 'Ocorreu um erro ao realizar cadastro, tente novamente.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <>

      <Header redirectTo="dashboard" icon={IoIosArrowDropleft} />

      <Container>
        <AnimationContainer>
          <ContentFormImage>

            <Form ref={formRef} onSubmit={handleSubmit}>

              <Input
                parent="Register"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome" />

              <Input
                name="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="Url Site" />

              <Input
                name="url_photo"
                value={url_photo}
                onChange={e => setPhoto(e.target.value)}
                placeholder="Url Foto" />

              <Input
                name="user"
                value={userRegister}
                onChange={e => setUserRegister(e.target.value)}
                placeholder="Usuário / E-mail" />

              <InputPassword
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha" />

              <Input
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="+ Info" />

              <Button type="submit">Cadastrar</Button>

            </Form>

            {url_photo && <img src={url_photo} alt={name} />}

          </ContentFormImage>
        </AnimationContainer>
      </Container>

    </>

  );
};

export default Register;

