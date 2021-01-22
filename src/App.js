import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-sign-up.component'
import Header from '.././src/components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component { //Access to the state

  unsubsribeFromAuth = null

componentDidMount() {
  const {setCurrentUser} = this.props;

  
  this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
             id: snapShot.id,
            ...snapShot.data()
            })
      })
      
    }
    setCurrentUser(userAuth);
    
    
  })
}

componentWillUnmount() {
  this.unsubsribeFromAuth(); //signOut
}


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
  
        </Switch>
       
      </div>
    );

  }
 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
