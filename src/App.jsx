import { Rerender } from './components/Rerender/Rerender';
import { TimerComponent } from './components/Timer/TimerComponent';
import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'
import { Users } from './components/Users/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <TimerComponent /> */}

      {/* <Rerender /> */}
      <Users />

      {/* <ConfettiContainer /> */}
    </Layout>
  );
};

//new Users() -> constructor -> render -> componentDidMount -> componentDidUpdate -> componentWillUnmount


export default App