import React, { Component, useState } from "react";

export default function AddTicket() {
  const [customer, setCustomer] = useState("");
  const [order, setOrder] = useState("");

  const submitTicket = async () => {
    const inputCust = document.getElementById("customer").value;
    const inputOrderInfo = document.getElementById("subject").value;
    const addNewTicketRequest = await fetch("/api/orders/newOrder", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custID: inputCust,
        orderInfo: inputOrderInfo,
      }),
    });
    const parsedNewTicketResponse = await addNewTicketRequest.json();
  };
  return (
    <>
      <div className="ticketSubmit">
        <input
          className="inputBoxes"
          placeholder="Customer ID"
          id="customer"
          onChange={(event) => setCustomer(event.target.value)}
          value={customer}
        ></input>
        <input
          className="inputBoxes"
          placeholder="Order Details"
          id="subject"
          onChange={(event) => setOrder(event.target.value)}
          value={order}
        ></input>
        {/* <input className="inputBoxes" placeholder="Set Priority (A, B, C)" id="priority" onChange={event => setOrder(event.target.value)} value={order}></input> */}

        {/* <input placeholder="" id="status"></input> */}
        {/* <input id="priority"></input>
      <input id="due"></input>
      <input id="created"></input> */}
        {/* <div class="form__group">
        <input type="text" class="form__input" id="custId" placeholder="Customer ID" required="" />
        <label for="name" class="form__label">Customer ID</label>
        <input type="text" class="form__input" id="orderDetails" placeholder="Order Details" required="" />
        <label for="name" class="form__label">Order Details</label>
      </div> */}
        <button id="buttoAddTicket" onClick={submitTicket}>
          submit ticket
        </button>
      </div>
    </>
  );
}
