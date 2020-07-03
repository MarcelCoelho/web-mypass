import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, AnimationContainer, ContentFormImage } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  url_photo: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [url_photo, setPhoto] = useState<string>('');

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode realizar login no Mypass.',
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
      <Container>
        <AnimationContainer>

          <ContentFormImage>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu cadastro</h1>
              <Input parent="SignUp"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                icon={FiUser}
                placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input name="url_photo"
                value={url_photo}
                onChange={e => setPhoto(e.target.value)}
                icon={FiCamera}
                placeholder="Url Photo" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <Button type="submit">Cadastrar</Button>

              <Link to="/">
                <FiArrowLeft size={32} />
                Voltar
              </Link>

            </Form>

            {url_photo && <img src={url_photo} alt={name} />}

          </ContentFormImage>



        </AnimationContainer>
      </Container>
    </>
  );
};

export default SignUp;
