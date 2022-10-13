import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'
import { Posts } from './components/Posts/Posts';
import { Counter } from './components/Counter/Counter';
import { TimerComponent } from './components/Timer/TimerComponent';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <TimerComponent /> */}
      {/* <Counter /> */}
      <Posts />
    </Layout>
  );
};

// new Counter() -> render()
// Counter() -> Counter()


export default App