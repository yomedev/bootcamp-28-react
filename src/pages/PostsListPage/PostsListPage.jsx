import { useCallback, useEffect, useState } from 'react';


import { Button } from '../../components/Button/Button';
import { PostsError } from '../../components/Posts/PostsError/PostsError';
import { PostsSearch } from '../../components/Posts/PostsSearch/PostsSearch';
import { PostsItem } from '../../components/Posts/PostsItem/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader/PostsLoader';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/postsService';
import { Navigate, useSearchParams } from 'react-router-dom';


export const PostsListPage = () => {
  const [posts, setPosts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';
  console.log(search);
  // const [page, setPage] = useState(1)

  const [status, setStatus] = useState(Status.IDLE);
  // const [search, setSearch] = useState('');

  const fetchPosts = useCallback(params => {
    setStatus(Status.LOADING);
    getPostsService(params)
      .then(data => {
        setStatus(Status.SUCCESS);
        setPosts(data);
      })
      .catch(() => setStatus(Status.ERROR));
  }, [])

  useEffect(() => {
    fetchPosts({ page, search })
  }, [search, page, fetchPosts]);

  if (status === Status.LOADING || status === Status.IDLE) {
    return <PostsLoader />;
  }

  if (status === Status.ERROR) {
    return <PostsError />;
  }

  if (status === Status.SUCCESS && !posts) {
    return <div>Posts Not Found</div>
    // <PostsNotFound />;
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
              onClick={() => setSearchParams({ page: index + 1, search: search })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

    </>
  );
};
