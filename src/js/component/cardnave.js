import React from "react";
import { Link } from "react-router-dom";

export const Cardnave = (props) => {
  console.log ('llama a la api')
    
return (
<div className="card" style={{width: "18rem;"}}>
 
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">info.</p>
    <  Link to={props.uid} className="btn btn-primary">ver{props.uid}</Link>
  </div>
</div>

)

};