import React from "react";
import { useForm } from "react-hook-form";


const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert("Added successfully....")
    fetch("https://grim-alien-58691.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json());
      
    reset();
  };
  return (
      <>

    <div className="container d-flex justify-content-center align-items-center my-4">
      <div className="my-4">
        <h1 className="text-center text-uppercase mb-3">Add a new service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register("title", { required: true })}
              placeholder="Tittle"
              className="form-control mb-3"
            />
          </div>
          <div className="form-group mb-3">
            <input
              {...register("image", { required: true })}
              placeholder="Image url"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <input
              {...register("Price", { required: true })}
              placeholder="Price"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              {...register("description", { required: true })}
              placeholder="Description"
              className="form-control"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <input type="submit" className="btn btn-danger px-5 mx-4" />
          <br />
        </form>
      </div>
    </div>
    </>
  );
};

export default AddService;
