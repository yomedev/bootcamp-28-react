import { Component } from 'react';

import { Button } from '../Button/Button';

export class SearchPosts extends Component {

  render() {
    const { search, onChangeSearch, onSearchRequest } = this.props

    return (
      <div className="input-group mb-3">
        <input type="text" value={search} onChange={onChangeSearch} className="form-control" placeholder="Type to search..." />
        <Button onClick={onSearchRequest}>Search</Button>
      </div>
    );
  }
}