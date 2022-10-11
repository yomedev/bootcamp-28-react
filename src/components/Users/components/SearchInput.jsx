import React from 'react'

const SearchInput = ({ value, onChangeSearch, onSearchReset }) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        value={value}
        onChange={onChangeSearch}
        type="text"
        className="form-control"
        placeholder="Type to search ..."
      />
      <button className="btn btn-outline-secondary" onClick={onSearchReset} type="button">
        Reset
      </button>
    </div>
  )
}

export default SearchInput