import React, { useState, useEffect, FormEvent, useRef } from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';

import { FiEdit, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Form, FormDel, Repositories, User, Password, ConfigureSvg, Error } from './styles';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';
import Header from '../../components/header';

import Modal from 'react-modal';

Modal.setAppElement('#root');

interface IRegister {
  id: string;
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id: string;
}

const Dashboard: React.FC = () => {

  const inputPesquisa = useRef<HTMLInputElement>(null);

  let [registersFilter, setRegistersFilter] = useState<IRegister[]>([]);
  let [countRegisters, setCountRegisters] = useState<number>(0);

  const [newRegister, setNewRegister] = useState('');
  const [registers, setRegisters] = useState<IRegister[]>([]);
  const [inputError, setInputError] = useState('');
  const [iconEyeOff, setIconEyeOff] = useState<boolean>(true);

  const { user } = useAuth();

  useEffect(() => {

    api.get(`registers/${user.id}`).then(response => {
      setRegisters(response.data);
      setRegistersFilter(response.data);
      setCountRegisters(response.data.length);
    });

    inputPesquisa.current?.focus();

  }, [setRegisters, setRegistersFilter]);

  async function handleAddRegister(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {

      if (newRegister) {

        const foundedRegisters = registers.filter(register => {
          return (register.name.toLocaleLowerCase().indexOf(newRegister.toLocaleLowerCase()) > -1)
        })

        if (foundedRegisters) {

          let newArray: IRegister[] = [];
          foundedRegisters.map(register => {
            newArray.push(register)
          });

          setRegistersFilter(newArray);
          setCountRegisters(newArray.length);
          setInputError('');

        } else {
          setInputError(`Nenhum registro encontrado para o filtro: ${newRegister}`);
        }

      } else {
        setRegistersFilter(registers);
        setCountRegisters(registers.length);
      }


      setNewRegister('');

    }
    catch (err) {
      setInputError('Erro na busca por este registro.')
    }
  }

  function handleDelRegister(id: string) {
    return function (event: FormEvent<HTMLFormElement>) {
      event.preventDefault()

      api.delete(`/register/${id}`).then(response => {

        let newArray: IRegister[] = [];
        registers.map(register => {
          if (register.id !== id) {
            newArray.push(register);
          }
        });

        setRegisters(newArray);
        setRegistersFilter(newArray);
        setCountRegisters(newArray.length);
      });

    }
  }

  const handleEye = () => {
    setIconEyeOff(!iconEyeOff);
  };

  return (
    <>
      <Header redirectTo="register" id={uuid()} icon={IoIosAddCircleOutline} />

      <Form hasError={!!inputError} onSubmit={handleAddRegister}>
        <input
          ref={inputPesquisa}
          value={newRegister}
          onChange={e => setNewRegister(e.target.value)}
          placeholder="Digite o nome do registro" />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {registersFilter.length > 0 &&
          <>
            <div>
              <ConfigureSvg >
                {iconEyeOff ?
                  <FiEyeOff size={22} onClick={handleEye} />
                  :
                  <FiEye size={22} onClick={handleEye} />
                }

                <span>
                  Total registros: {countRegisters}
                </span>
              </ConfigureSvg>
            </div>
          </>
        }
        {registersFilter.map(register => (

          <div key={register.id}>
            <img
              src={register.url_photo}
              alt={register.name} />
            <div>
              <a href={register.url}>
                <strong>{register.name}</strong>
              </a>

              <User>{register.user}</User>
              {iconEyeOff ?
                <Password>{register.password}</Password>
                :
                <User>{register.password}</User>
              }
              <User>{register.description}</User>
            </div>

            <Link to={`/register/${register.id}`}>
              <ConfigureSvg>
                <FiEdit size={26} />
              </ConfigureSvg>
            </Link>

            <FormDel hasError={false} onSubmit={handleDelRegister(register.id)}>
              <button type="submit">
                <ConfigureSvg>
                  <FiTrash2 size={26} />
                </ConfigureSvg>
              </button>
            </FormDel>
          </div>
        ))}
      </Repositories>

    </>
  )

};

export default Dashboard;
