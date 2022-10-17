import { useState } from 'react';

import { CommentForm } from '../../../components/CommentForm/CommentForm';
import { CommentList } from '../../../components/CommentList/CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};