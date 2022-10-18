import { useContext, useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../../../context/AuthContext';

import { Button } from '../../../Button/Button';

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPassword, setIsPassword] = useState(true);

  const { login } = useContext(AuthContext)

  const toggle = () => setIsPassword(prev => !prev);

  const handleChange = (event) => {
    const { value, name } = event.target
    switch (name) {
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        throw new Error()
    }
  }

  return (
    <>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input onChange={handleChange} value={username} name="username" type="text" className="form-control" placeholder="Username" />
      </div>

      <div className="input-group mb-3">
        <input onChange={handleChange} value={password} name="password" type={isPassword ? 'password' : 'text'} className="form-control" placeholder="Password ..." />
        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button onClick={() => login(username, password)}>Log In</Button>
    </>
  );
};