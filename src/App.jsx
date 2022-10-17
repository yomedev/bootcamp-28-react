import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'

import { HomePage } from './pages/HomePage/HomePage';
import { PostsListPage } from './pages/PostsListPage/PostsListPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ExercisesPage } from './pages/ExercisesPage/ExercisesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommentsPage } from './pages/SinglePostPage/CommentsPage/CommentsPage';
import { RerenderPage } from './pages/ExercisesPage/RerenderPage/RerenderPage';

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
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App

// comments