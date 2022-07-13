import fakeTicketGenerator from "../lib/fakeTicketGenerator";
import Tickets from "./Tickets";
import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";

export default function Bugs() {
  const [orders, setOrders] = useState([]);
  let ticketReports = [];

  const getOrdersData = async () => {
    const ordersDataJSON = await fetch(
      "http://localhost:3333/orders/openOrders"
    );
    const ordersData = await ordersDataJSON.json();
    console.log(ordersData);
    for (let i = 0; i < ordersData.length; i++) {
      const { _id, name, cust_account_id, open, order_info } = ordersData[i];
      ticketReports.push(
        <Tickets
          key={_id}
          customer={name}
          subject={order_info}
          status={open ? "open" : "closed"}
          priority={"1"}
          due={"someduedate"}
          created={"somecreateddate"}
        />
      );
    }
    setOrders(ticketReports);
    console.log(ticketReports);
  };

  useEffect(() => {
    getOrdersData();
  }, []);

  // ticketReports.push(Tickets(fakeTicketGenerator()));
  // Calls Tickets which makes a new ticket compnenet from the fake info
  // from ticket generator
  return (
    <>
      <div className="wrapper">
        <nav className="flex-nav">
          <div className="ticketHeader">
            <div id="ticketCategor" className="type">
              Cust
            </div>
            {
              <div id="ticketCategor" className="subject">
                {" "}
                Subject
              </div>
            }
            <div id="ticketCategor" className="status">
              {" "}
              Status{" "}
            </div>
            <div id="ticketCategor" className="priority">
              {" "}
              Priority{" "}
            </div>
            <div id="ticketCategor" className="due">
              {" "}
              Due
            </div>
            <div id="ticketCategor" className="created">
              {" "}
              Created
            </div>
          </div>
          <ul>{orders}</ul>
        </nav>
      </div>
      <div className="gradient-border" id="box"></div>
    </>
  );
}
