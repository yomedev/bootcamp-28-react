import Layout from './components/Layout/Layout'
import Header from './components/Layout/Header/Header'
import { Posts } from './components/Posts/Posts';
import { Counter } from './components/Counter/Counter';
import { TimerComponent } from './components/Timer/TimerComponent';
import { Memo } from './Memo/Memo';
import { AuthProvider } from './context/AuthContext';
import {Rerender} from './components/Rerender/Rerender'

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Header title="Hello world!" />
        {/* <TimerComponent /> */}
        {/* <Counter /> */}
        {/* <Posts /> */}
        {/* <Memo /> */}
        <Rerender />
      </Layout>
    </AuthProvider>




  );
};

// new Counter() -> render()
// Counter() -> Counter()


export default App