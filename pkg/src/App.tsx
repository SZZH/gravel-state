import useGravelState from './gravel';
import Module1 from './module/Module1'
import Module2 from './module/Module2'

function App() {
  const [state2, setState2] = useGravelState('state2')
  const [state1, setState1] = useGravelState('state1')
  return (
    <div>
      两个 module 的父级元素
      <p>
      state1: {state1}
      </p>
      <p>
      state2: {state2}
      </p>
      <Module1 />
      <Module2 />
    </div>
  );
}

export default App;
