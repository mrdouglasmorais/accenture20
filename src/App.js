import { Provider } from 'react-redux';

import store from './store'

// import Students from './views/Pages/Students';
import ChuckNorris from './views/Pages/ChuckNorris'

function App() {
  return (
    <Provider store={store}>
      <ChuckNorris/>
    </Provider>
  );
}

export default App;