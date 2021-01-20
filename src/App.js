import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-sign-up.component'
import Header from '.././src/components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component { //Access to the state
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubsribeFromAuth = null

componentDidMount() {
  this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
        console.log(this.state)
     
      })
      
    }
    this.setState({ currentUser: userAuth })
    
    
  })
}

componentWillUnmount() {
  this.unsubsribeFromAuth(); //signOut
}


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
  
        </Switch>
       
      </div>
    );

  }
 
}

export default App;
