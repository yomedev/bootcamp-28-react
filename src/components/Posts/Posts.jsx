import { Component } from 'react';

import { Button } from '../Button/Button';
import { PostsError } from './PostsError/PostsError';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

import { getPostsService } from '../../services/postsService';
import { Status } from '../../constants/Status';

export class Posts extends Component {
  state = {
    posts: null,
    status: Status.IDLE,
    searchQuery: '',
  };

  componentDidMount() {
    this.getFetchedPosts()
  }

  getFetchedPosts = async (params) => {
    this.setState({ status: Status.LOADING })

    try {
      const data = await getPostsService(params)
      this.setState({ posts: data, status: Status.SUCCESS })
    } catch {
      this.setState({ status: Status.ERROR })
    }
  }

  handleChangePage = (page) => {
    const { searchQuery } = this.state
    this.getFetchedPosts({ page, search: searchQuery })
  }

  handleChangeSearch = event => {
    this.setState({ searchQuery: event.target.value })
  }

  handleSubmitRequest = () => {
    const { searchQuery } = this.state
    this.getFetchedPosts({ search: searchQuery })
  }

  render() {
    const { posts, status, searchQuery } = this.state;

    if (status === Status.LOADING || status === Status.IDLE) {
      return <PostsLoader />;
    }

    if (status === Status.ERROR) {
      return <PostsError />
    }

    if (status === Status.SUCCESS && !posts.data) {
      return <></>
    }

    return (
      <>
        <SearchPosts search={searchQuery} onChangeSearch={this.handleChangeSearch} onSearchRequest={this.handleSubmitRequest} />

        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {posts.data.map(post => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(posts.total_pages)].map((_, index) => (
              <Button disabled={posts.page === index + 1} onClick={() => this.handleChangePage(index + 1)} key={index}>{index + 1}</Button>
            ))}
          </div>
        </div>
      </>
    );
  }
}
