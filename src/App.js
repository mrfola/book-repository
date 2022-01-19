import './App.css';
import Header from "./components/Header";
import BookContainer from './components/BookComponents/BookContainer';
import LoginComponent from './components/AuthComponents/LoginComponent';
import SignUpComponent from './components/AuthComponents/SignUpComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';
import LogoutComponent from './components/AuthComponents/LogoutComponent';

function App() {
  return (
    <Router>
       <div className="App">
        <div className="container-fluid">
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/"><BookContainer/></Route>
              <Route path="/login" exact><LoginComponent/></Route>
              <Route path="/sign-up" exact><SignUpComponent/></Route>
              <Route path="/dashboard" exact><DashboardComponent/></Route>
              <Route path="/logout" exact><LogoutComponent/></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
