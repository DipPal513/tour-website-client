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
    setIsloading(true)
    fetch(`https://grim-alien-58691.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const isConfirm = window.confirm("Are you sure...?");
          if (isConfirm) {
            const remaining = orders.filter((order) => order._id !== id);
            alert("Successfuly deleted....");
            setOrders(remaining);
          } else {
            setOrders([]);
          }
        }
      }).finally(()=>setIsloading(false))
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-5 text-uppercase">
          Manage all {orders?.length} orders
        </h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr>
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
  );
};

export default ManageAllOrders;
