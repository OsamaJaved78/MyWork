import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Contact from './Pages/contact/contact';
import Header from './Pages/header';
import About from './Pages/about/about';
import MainLogin from './Pages/Login/Register/MainLogin';
import Footer from './Pages/footer';
import { AnimatePresence,motion} from "framer-motion";
import FoobarForm from './Pages/Form';
import Rough2 from './Pages/Rough2';
import Homepage  from './Pages/blog/pages/homepage/Homepage';
import Register  from './Pages/blog/pages/single/Single';
import Single from './Pages/blog/pages/single/Single';
import Searchpage from './Pages/Search/Searchpage';
import Single2 from './Pages/blog/pages/single/Single2';



function App() {
  const currentUser = true;
  return (  
    <Router>
    <Header />
    <AnimatePresence exitBeforeEnter>
    <Switch >
      <Route path='/' exact component= {Rough2} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/Search' component={Searchpage} />
      <Route path='/login' component={MainLogin} />
      <Route exact path="/blog" component ={Homepage}>
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/post/abc">
          <Single />
        </Route>
        
    </Switch>
    </AnimatePresence>
    <Footer/>
  </Router>
  
  );
}

export default App;
