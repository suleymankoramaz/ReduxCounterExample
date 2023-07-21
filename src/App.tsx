import { Provider } from 'react-redux';
import Counter from './counter';
import store from './counter-reducer';
import './global.css'

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <Counter />
    </div>
  </Provider>
);

export default App;