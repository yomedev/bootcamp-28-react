import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Button } from '../../components/Button/Button';

import { Loader } from '../../components/Loader/Loader';
import { getSinglePostService } from '../../services/postsService';
import { CommentsPage } from './CommentsPage/CommentsPage';

export const SinglePostPage = () => {
  const {postId} = useParams()

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation()
  // const {isPostCreate} = location.state
  console.log(location.state.from);

  // useEffect(() => {
  //   if (isPostCreate) {
  //     console.log("Post created successfully");
  //   }
  // }, [isPostCreate])

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(postId)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
      <Link to={location.state?.from ?? '/posts'} className='btn btn-primary mb-5'>Back</Link>
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
        />
        <h1 className="mb-5">{post.title}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

        <Link to={`/posts/${postId}/comments`} className="btn btn-primary my-4">
          Vew post comments
        </Link>
        <Outlet />
      </>
    )
  );
};

/* {
  pathname: '/posts'
  search: "?page=2&search=javascript"
} */