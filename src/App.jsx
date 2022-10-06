import React from 'react';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Banner from './components/Banner/Banner';
import UsersList from './components/Users/UsersList';


const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <Counter />
      {/* <Banner /> */}
      {/* <UsersList /> */}
    </Layout>
  )
}

export default App