import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'
import { Posts } from './components/Posts/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Posts />
    </Layout>
  );
};

//new Users() -> constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount


export default App