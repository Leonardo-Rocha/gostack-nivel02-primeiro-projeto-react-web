import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38355333?s=460&u=ad01b38c2912eb463b043252261d49787ccaef8b&v=4"
            alt="Leonardo Rocha"
          />

          <div>
            <strong>elf-reader</strong>
            <p>
              Elf-reader is a tool for reading executable (ELF) files and
              creating a bootable OS image.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38355333?s=460&u=ad01b38c2912eb463b043252261d49787ccaef8b&v=4"
            alt="Leonardo Rocha"
          />

          <div>
            <strong>elf-reader</strong>
            <p>
              Elf-reader is a tool for reading executable (ELF) files and
              creating a bootable OS image.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38355333?s=460&u=ad01b38c2912eb463b043252261d49787ccaef8b&v=4"
            alt="Leonardo Rocha"
          />

          <div>
            <strong>elf-reader</strong>
            <p>
              Elf-reader is a tool for reading executable (ELF) files and
              creating a bootable OS image.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
