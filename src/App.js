import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from '.././src/components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'

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
          <Route path='/menu' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (
            <SignInAndSignUpPage />
          )} />
  
        </Switch>
       
      </div>
    );

  }
 
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
