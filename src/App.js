import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/Login/Login';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initiliseApp} from "./redux/app-reducer";
import { useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';

function App (props) {

  useEffect ( () => {
    props.initiliseApp ();
  } )

  if (!props.initilised) {
    return <Preloader />
  }

  return (
    <div className={"App"}>
    <Header />
      <div className = "container" >
        <Route path = "/login" render = { () => <LoginForm /> } />
        <Route path = "/users" render = { () => <UsersContainer /> } />
        <Route path = "/profile" render = { () => <ProfileContainer /> } />
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    initilised: state.app.initilised,
  }
}

export default compose (
  connect (mapStateToProps, {initiliseApp} )(App)
);
