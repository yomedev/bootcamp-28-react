import { useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { PostsError } from '../../components/Posts/PostsError/PostsError';
import { PostsItem } from '../../components/Posts/PostsItem/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader/PostsLoader';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { useDeletePostMutation, useGetPostsQuery, useLazyGetPostsQuery } from '../../redux/rtk-posts/api.rtk-posts';

export const RtkPostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const { data: posts, isLoading, isSuccess, isError } = useGetPostsQuery({page, search, limit: 6})
  const [deletePost] = useDeletePostMutation()

  if (isLoading) {
    return <PostsLoader />;
  }

  if (isError) {
    return <PostsError />;
  }

  if (isSuccess && !posts?.data?.length) {
    return <div>Posts Not Found</div>
  }


  return (
    <>
      <SearchInput />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={deletePost} />
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