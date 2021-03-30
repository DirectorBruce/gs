import React, { Component } from "react";
import elements from "./data.json";

const scp = elements.map(

    (elements) => {
        return(
            <div className="col-12" key={elements.item}>
                <div className="card text-dark">
                <br></br>
                    <h2 className="card-header text-center">Item #: {elements.item}</h2>
                    <br></br>                    
                        <div className="card-body">                                                   
                            <p className="card-text"><strong>Reference: </strong>{elements.reference}</p>
                            <p className="card-text"><strong>Adedum/Appendix: </strong>{elements.adendum}</p>
                            <section class="py-3 text-center container">
                                <a href="#" className="btn btn-lg btn-primary my-2" role="button" data-bs-toggle="button">Home</a>
                            </section>
                        </div>
                    </div>
                    <br></br>
            </div>
            );
    }
);

class Details extends Component {
    render() {
        return(            
            <div className="row">                               
                <h1 className="p-2 display-2 text-center bg-light text-dark">SCP Foundation</h1>
                {scp}
            </div>
        );
    }
}
export default Details;