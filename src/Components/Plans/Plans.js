import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Plan from "./Plan/Plan";

const Plans = (props) => {
  const quantity = props.quantity;
  const { setIsloading } = useAuth();
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    setIsloading(true);
    fetch("https://grim-alien-58691.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
      }).finally(()=> setIsloading(false))
  }, []);

  return (
    <div className="plans-section">
      <h2 className="text-uppercase my-4 text-center">
        our <span className="text-warning">plan</span>
      </h2>
      <div className="container">
        <div className="row">
          {plans
            .map((plan, index) => <Plan {...plan} key={index} />)
            .slice(0, quantity)}
        </div>
      </div>
    </div>
  );
};

export default Plans;
