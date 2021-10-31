import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Plan = ({ title, description, image,_id,Price }) => {
  const { user} = useAuth();
  const handleClick = () => {
 
    fetch("https://grim-alien-58691.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
    
  };
  
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card shadow">
        <img src={image} className="card-img-top" style= {{height:'300px'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price ${Price}</p>
          <Link to={`/placeorder/${_id}`} onClick = {handleClick} className="btn btn-dark">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
