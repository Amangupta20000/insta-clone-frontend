import React from 'react'
import Navbar from './Navbar' 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router';
import Home from './Home'
import Footer from './Footer'
import Like from './Like';
import Explore from './Explore';
import UploadImage from './UploadImage';


 const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/like' exact component={Like}/>
                <Route path='/explore' exact component={Explore}/>
                <Route path='/upload' exact component={UploadImage}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App
