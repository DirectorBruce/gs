import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="p-4 text-center bg-light text-dark">
                <h1 className="p-4 display-1 text-center text-dark">SCP Foundation</h1>                
                <h2 className="p-4 alert alert-primary">WELCOME BACK SCP FIELD AGENT</h2>
                <br></br>
                <p>You are responsible to confirm and collect more information about the individuals, entities, locations and objects herein referenced</p>
                <p>All the available evidence of natural law violation is available here and stated on its individuals cards</p>
                <p>The elements are divided in 2 different classes: <strong>Euclid and Safe</strong></p>
                <p><span class="badge rounded-pill bg-primary">Elements Tab</span> For main elements data: image, class, procedures and description</p>
                <p><span class="badge rounded-pill bg-primary">Details Tab</span> For further details: reference or adendum/appendix when available</p>
                <br></br>
            </div>
        );
    }
}
export default Home;