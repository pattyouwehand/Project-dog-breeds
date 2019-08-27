import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route } from 'react-router-dom'
// import DogImages from './dogimages'
import DogImagesContainer from './DogImagesContainer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Doglist} />
            <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
          </Switch>  
        </div>
      <Doglist />
      </BrowserRouter>
    
    )
  }
}
    
    export default App;
      <main>
      {/* <Doglist /> */}
      
      {/* <Route path="/dog-breeds/:breed" component={DogImages } /> */}
      />
      </main>
    </div>
  );
};

export default App;
