import React from "react";
import useOrders from "../../hooks/useOrders";
import { Link } from "react-router-dom";

const OrderHistory = () => { // eslint-disable-next-line no-unused-vars
    const [orders, refetch, isLoading] = useOrders()
    // console.log(orders);
    return (
        <div className="order-content">
            <h3 className="account-sub-title d-none d-md-block"> Orders </h3>
            <div className="order-table-container text-center">
                <table className="table table-order text-left">
                    <thead>
                        <tr>
                            <th className="order-id">ORDER</th>
                            <th className="order-date">DATE AND TIME</th>
                            <th className="order-status">STATUS</th>
                            <th className="order-price">TOTAL</th>
                            <th className="order-price text-uppercase">transaction id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => <>
                            <tr key={order._id}>
                                <td>{order?.itemNames.length > 0 && (
                                    <>
                                        {order.itemNames.map((pdName, index) => (
                                            <React.Fragment key={index}>
                                                {pdName}
                                                {index !== order.itemNames.length - 1 && ", "}
                                            </React.Fragment>
                                        ))}
                                    </>
                                )}  <> ({order?.quantity})</>
                                </td>
                                <td>
                                    {new Date(order?.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}
                                </td>


                                <td>{order?.status}</td>
                                <td>
                                    {order?.price.toFixed(2)}
                                </td>

                                <td>{order?.transactionId}</td>
                            </tr>
                        </>)
                        }
                    </tbody>
                </table>

                <Link to='/' className="btn btn-dark">
                    Go Shop
                </Link>
            </div>
        </div>
    );
};

export default OrderHistory;