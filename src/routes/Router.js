import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../app/home/screen/Home';
import Login from '../app/login/screen/Login';
import Splash from '../app/splash/screen/Splash';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>

                <Scene
                    key="splash"
                    component={Splash}
                    hideNavBar
                     />
                <Scene
                    key="login"
                    component={Login}
                    hideNavBar />
                <Scene
                    key="home"
                    component={Home}
                    hideNavBar 
                    initial/>
            </Scene>

        </Router>
    );
};

export default RouterComponent;