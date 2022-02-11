import Home from './Home';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
