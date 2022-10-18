import { lazy, Suspense } from 'react';

import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'

// import { HomePage } from './pages/HomePage/HomePage';
import { PostsListPage } from './pages/PostsListPage/PostsListPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ExercisesPage } from './pages/ExercisesPage/ExercisesPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CommentsPage } from './pages/SinglePostPage/CommentsPage/CommentsPage';
import { RerenderPage } from './pages/ExercisesPage/RerenderPage/RerenderPage';
import { TimerPage } from './pages/ExercisesPage/TimerPage/TimerPage';
import { CounterPage } from './pages/ExercisesPage/CounterPage/CounterPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))

export const App = () => {
  return (
    <BrowserRouter basename='/homework/'>
      
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/posts" element={<PostsListPage />} />
            <Route path="/posts/:postId" element={<SinglePostPage />} >
              <Route path="comments" element={<CommentsPage />} />
            </Route>
            <Route path="/new-post" element={<NewPostPage />} />

            <Route path="/exercises" element={<ExercisesPage />} >
              <Route index element={<TimerPage />} />
              <Route path="timer" element={<TimerPage />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="re-render" element={<RerenderPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>

    </BrowserRouter>

  );
};

export default App

// comments