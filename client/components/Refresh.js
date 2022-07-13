import React, { Component, useEffect } from "react";
import { render } from 'react-dom';

export default function Refresh(props) {
  useEffect(() => {
    getOrdersData();
  });

  const getOrdersData = async () => {
    const ordersDataJSON = await fetch('http://localhost:3333/orders/openOrders');
    const ordersDataObject = await ordersDataJSON.json();
    console.log(ordersDataObject);
  }




  return (
    <h1> {props.testingProp}</h1>
  )
}
