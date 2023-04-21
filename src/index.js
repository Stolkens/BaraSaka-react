import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/normalize.scss';
import './styles/global.scss';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
      <BrowserRouter>
            <Provider store={store}>
                  <App tab="home"/>
            </Provider>   
      </BrowserRouter>  
);


