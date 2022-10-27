import { lazy, Suspense, useEffect } from 'react';

import Layout from './components/Layout/Layout'


import { PostsListPage } from './pages/PostsListPage/PostsListPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { ExercisesPage } from './pages/ExercisesPage/ExercisesPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CommentsPage } from './pages/SinglePostPage/CommentsPage/CommentsPage';

import { CounterPage } from './pages/ExercisesPage/CounterPage/CounterPage';
import { UsersPage } from './pages/ExercisesPage/UsersPage/UsersPage';
import { RtkPostsPage } from './pages/RtkPostsPage/RtkPostsPage';
import { JoinPage } from './pages/JoinPage/JoinPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from './redux/profile/thunk.profile';
import { selectAuth } from './redux/auth/select.auth';
import { Status } from './constants/fetch-status';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))


export const App = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(selectAuth)
  useEffect(() => {
    if (status === Status.SUCCESS) {
      dispatch(getProfileThunk())
    }

  }, [dispatch, status])

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsListPage />} />

          <Route path="/posts/:postId" element={<SinglePostPage />} >
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />} >
            <Route index element={<Navigate to="users" />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>

          <Route path="/rtk-posts" element={<RtkPostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
};

export default App

// comments