import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/normalize.scss';
import './styles/global.scss';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
      <BrowserRouter>
            <App tab="home"/>
      </BrowserRouter>  
);


