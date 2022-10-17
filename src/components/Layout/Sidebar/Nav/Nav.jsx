import { Button } from '../../../Button/Button';
import { useAuth } from '../../../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';


export const Nav = () => {
  const { logout } = useAuth()
  console.log(Link);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <NavLink to="/" end style={{ textAlign: 'left', marginLeft: '-10px' }} className='btn btn-light'>Home page</NavLink>
        <NavLink to="/posts" style={{ textAlign: 'left', marginLeft: '-10px' }} className='btn btn-light'>Posts list</NavLink>
        <NavLink to="/new-post" style={{ textAlign: 'left', marginLeft: '-10px' }} className='btn btn-light'>Create new post</NavLink>
        <NavLink to="/exercises" style={{ textAlign: 'left', marginLeft: '-10px' }} className='btn btn-light'>React exercises</NavLink>
      </div>

      <Button onClick={logout} className="btn-danger mt-auto">Log Out</Button>
    </div>
  );
};

// Link to="/posts" => url path
// url path => Route path="/posts" element={PostsListPage}

// style.css => .active {}

//