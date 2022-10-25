import { lazy, Suspense } from 'react';

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

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))

export const App = () => {
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
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>

    </BrowserRouter>

  );
};

export default App

// comments