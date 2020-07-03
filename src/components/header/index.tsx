import React, { InputHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Logout } from './styles';
import { useAuth } from '../../hooks/auth';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  redirectTo: string;
  id?: string;
  icon: IconType;
}

const Header: React.FC<InputProps> = ({ redirectTo,
  id,
  icon: Icon,
  ...rest }) => {

  const { user, signOut } = useAuth();
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  return (
    <Container>

      {id ? <Link to={`/${redirectTo}/${id}`} >
        <Icon size={64} />
      </Link> :
        <Link to={`/${redirectTo}`} >
          <Icon size={64} />
        </Link>
      }
      <span>{user?.name}</span>
      <img src={user?.url_photo}
        alt={user?.name}
        onClick={() => { isLogoutVisible ? setLogoutVisible(false) : setLogoutVisible(true) }} />
      {isLogoutVisible &&
        (
          <Logout>
            <FiLogOut size={16} />
            <Link to="/" onClick={signOut} >
              <p>Sair</p>
            </Link>
          </Logout>
        )
      }

    </Container>
  )
};

export default Header;
