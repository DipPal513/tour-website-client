import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ManageAllOrders = () => {
  const { setIsloading} = useAuth();
  const [orders, setOrders] = useState();

  useEffect(() => {
    setIsloading(true)
    fetch("https://grim-alien-58691.herokuapp.com/myorders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .then(() => setIsloading(false))
  }, []);

  const handleDelete = (id) => {
    setIsloading(true);
    const isConfirm = window.confirm("Are you sure...?");
    if (isConfirm) {
      fetch(`https://grim-alien-58691.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount){
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
         
        });
    }
  };
  
  return (
    <div className="container align-items-center justify-content-center">
      <div className="row">
        <h1 className="text-center my-5 text-uppercase">
          Manage all {orders?.length} orders
        </h1>
        <div className="col-lg-8 col-md-8 col-sm-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">status</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key = {index}>
                <th scope="row">{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
               
                <td>{order.title}</td>
                <td>${order.price}</td>
              
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
