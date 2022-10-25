import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchAction } from '../../../redux/users/slice.users';

const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.users.search);

  const handleChange = event => {
    dispatch(changeSearchAction(event.target.value));
  };

  const handleResetSearch = () => {
    dispatch(changeSearchAction(''));
  };
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
      />
      <button className="btn btn-outline-secondary" onClick={handleResetSearch} type="button">
        Reset
      </button>
    </div>
  )
}

export default SearchInput