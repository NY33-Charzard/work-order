import fakeTicketGenerator from "../lib/fakeTicketGenerator";
import Tickets from "./Tickets";
import React, { Component, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const buildTickets = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Tickets(arr[i]));
  }
  return output;
};
const status = {
  cust: false,
  subject: false,
  status: false,
  priority: false,
  due: false,
  created: false,
};

function TicketColumn() {
  const [ticketComponents, setTicketsComponents] = useState([]);
  const [tickets, setTickets] = useState([]);
  let ticketReports = [];
  const sortColumbBy = (key) => {
    if (status[key]) {
      const sortAlphabetically = tickets
        .slice()
        .sort((a, b) => a[key].localeCompare(b[key]));
      setTicketsComponents(buildTickets(sortAlphabetically));
      status[key] = false;
    } else {
      const sortAlphabetically = tickets
        .slice()
        .sort((a, b) => b[key].localeCompare(a[key]));
      setTicketsComponents(buildTickets(sortAlphabetically));
      status[key] = true;
    }
  };
  const loadFakeData = () => {
    // Function will set tickets state and generate random tickets
    for (let i = 0; i < 200; i++) {
      ticketReports.push(fakeTicketGenerator());
    }
    setTickets(ticketReports);
    const ticketComponentArr = [];
    for (let i = 0; i < ticketReports.length; i++) {
      ticketComponentArr.push(Tickets(ticketReports[i]));
    }
    setTicketsComponents(ticketComponentArr);
  };
  const loadRealData = async () => {
    ticketReports = [];
    const ordersDataJSON = await fetch("/api/orders/openOrders");
    const ordersData = await ordersDataJSON.json();
    for (let i = 0; i < ordersData.length; i++) {
      const { orderid, name, cust_account_id, open, order_info } =
        ordersData[i];
      ticketReports.push(
        <Tickets
          id={orderid}
          key={uuidv4()}
          customer={name}
          subject={order_info}
          status={open ? "open" : "closed"}
          // priority={"1"}
          due={"someduedate"}
          created={"somecreateddate"}
        />
      );
    }
    setTicketsComponents(ticketReports);
  };
  useEffect(() => {
    loadRealData();
  }, []);
  return (
    <>
      <div className="wrapper">
        <nav className="flex-nav">
          <div className="ticketHeader">
            <div
              key={uuidv4()}
              id="ticketCategor"
              className="type"
              onClick={() => {
                sortColumbBy("type");
              }}
            >
              Cust
            </div>
            <div
              key={uuidv4()}
              id="ticketCategor"
              className="subject"
              onClick={() => {
                sortColumbBy("subject");
              }}
            >
              {" "}
              Subject
            </div>
            <div
              key={uuidv4()}
              id="ticketCategor"
              className="status"
              onClick={() => {
                sortColumbBy("status");
              }}
            >
              {" "}
              Status{" "}
            </div>
            {/* <div
              key={uuidv4()}
              id="ticketCategor"
              className="priority"
              onClick={() => {
                sortColumbBy("priority");
              }}
            >
              {" "}
              Priority{" "}
            </div> */}
            <div
              key={uuidv4()}
              id="ticketCategor"
              className="due"
              onClick={() => {
                sortColumbBy("due");
              }}
            >
              {" "}
              Close
            </div>
            {/* <div
              key={uuidv4()}
              id="ticketCategor"
              className="created"
              onClick={() => {
                sortColumbBy("created");
              }}
            >
              {" "}
              Created
            </div> */}
          </div>
          <ul>{ticketComponents}</ul>
        </nav>
      </div>
      {/* <div className="gradient-border" id="box"></div>
      <button id="loadFakeBtn" onClick={loadFakeData}>
        Load Fake Data
      </button>
      <button id="loadRealBtn" onClick={loadRealData}>
        Load Real Data
      </button> */}
    </>
  );
}
export default TicketColumn;
