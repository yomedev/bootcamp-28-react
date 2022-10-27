import { useState } from 'react';

import { CommentForm } from '../../../components/Comments/CommentForm/CommentForm';
import { CommentList } from '../../../components/Comments/CommentList/CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};