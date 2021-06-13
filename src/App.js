// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <div className="content"> 
          <Switch> 
            {/* switch make sures 1 route is shown at 1 time. all components go insideswitch*/}
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/blogs/:id"> 
              {/* <Create/> */}
              <BlogDetails/>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          {/* <Home/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
