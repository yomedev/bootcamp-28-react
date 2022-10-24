import { useEffect, useState } from 'react';


import { Button } from '../../components/Button/Button';
import { PostsError } from '../../components/Posts/PostsError/PostsError';
import { PostsSearch } from '../../components/Posts/PostsSearch/PostsSearch';
import { PostsItem } from '../../components/Posts/PostsItem/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader/PostsLoader';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/postsService';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../../redux/posts/thunk.posts';


export const PostsListPage = () => {
  const dispatch = useDispatch()
  // state => posts => {posts, status}
  const {posts, status} = useSelector(state => state.posts)

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    dispatch(getPostsThunk({page, search}))
  }, [search, page, dispatch]);

  if (status === Status.LOADING || status === Status.IDLE) {
    return <PostsLoader />;
  }

  if (status === Status.ERROR) {
    return <PostsError />;
  }

  if (status === Status.SUCCESS && !posts) {
    return <div>Posts Not Found</div>
  }

  return (
    <>
      <PostsSearch />
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === posts.page}
              onClick={() => setSearchParams({ page: index + 1, search: search})}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

    </>
  );
};
