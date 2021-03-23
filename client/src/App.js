import { Rout, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu>
          <Switch>
            <Route path='' component/>
          </Switch>
      </Menu> 
      <Footer/>
    </div>
  );
}

export default App;
