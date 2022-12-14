/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 1,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      alert("Payment ok");
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    alert("An Error occured with your payment ");
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL,
      }}
    >
      <div className="flex flex-col justify-center gap-2 content-start">
        <button type="submit" onClick={() => setShow(!show)}
    className="p-4 px-6 rounded-full bg-cyan-900 mx-auto text-white rale shadow-lg"
    >
          Subcribe Now!
        </button>

        {show && (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        )}
      </div>
    </PayPalScriptProvider>
  );
}
