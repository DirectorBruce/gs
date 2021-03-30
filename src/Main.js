import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Elements from "./Elements";
import Details from "./Details";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>                    
                    <ul className="nav justify-content-center nav-pills nav-justified bg-white">
                        <li className="nav-item"><NavLink className="nav-link" exact to="/"><h2>Home</h2></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/elements"><h2>Elements</h2></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/details"><h2>Details</h2></NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/elements" component={Elements}/>
                        <Route path="/details" component={Details}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;