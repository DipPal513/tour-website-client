import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import MyOrder from "../Admin/MyOrder";
const Placeorder = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user, setIsloading } = useAuth();
  const [service, setService] = useState({});
  const { planId } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch(`https://grim-alien-58691.herokuapp.com/services/${planId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setIsloading(false);
      });
  }, [service]);

  const onSubmit = (data) => {
    data.status = 'pending'
    fetch("https://grim-alien-58691.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {});
    reset();
    history.push("/Admin/MyOrder");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card">
            <img src={service.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <h5 className="card-title">{service.Price}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group my-3">
              <input
                {...register("name", { require: true })}
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                value={user.displayName}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <input
                {...register("email", { require: true })}
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Last name"
                value={user.email}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <input
                {...register("title", { require: true })}
                type="text"
                className="form-control"
                placeholder="title"
                value={service?.title}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <input
                {...register("price", { require: true })}
                type="text"
                className="form-control"
                placeholder="price"
                value={service?.Price}
                readOnly
              />
            </div> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 m-2 form-control"
              placeholder="name"
              {...register("name")}
              value = {user.displayName}
              readOnly
            />
            <br />
            <input
              className="p-2 m-2 form-control"
              placeholder="email"
              {...register("email")}
              value = {user.email}
              readOnly
            />
            <br />
            <input
              type="text"
              className="p-2 m-2 form-control"
              placeholder="title"
              {...register("title")}
              value = {service.title}
              readOnly
            />
            <br />
            <input
              type="number"
              className="p-2 m-2 form-control"
              placeholder="price"
              {...register("price")}
              value = {service.Price}
              readOnly
            />
            <br />
            <input
              type="text"
              className="p-2 m-2 form-control"
              placeholder="Adress"
              {...register("Adress")}
            />
            <br />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <br />

            {/* <input className="btn btn-danger  " type="submit" /> */}

            {!service.title ? (
              <button type="submit" className="btn btn-success" disabled>
                Purchase Now
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Purchase Now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
