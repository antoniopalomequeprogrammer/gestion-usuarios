
import './App.css';
import RegistroComponent from './components/RegistroComponent';
import generateStore from './redux/store';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Inicio from './components/Inicio';

function App() {

  const store = generateStore();

  return (

    <Router>

    <div className="container mt-3">
      <Navbar/>
      <Switch>
        <Route component={Inicio} path="/inicio" exact/>
        <Route component={Inicio} path="/" exact/>
        <Route component={RegistroComponent} path="/registro" exact/>
        <Route component={Login} path="/login" exact/>
      </Switch>
        
    </div>

    </Router>




  );
}

export default App;
