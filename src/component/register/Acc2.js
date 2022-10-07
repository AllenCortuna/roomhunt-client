import MojoAuth from "mojoauth-web-sdk";
import React from "react";

const Acc2 = () => {
  const [payload, setPayload] = React.useState(null);
  const mojoauth = new MojoAuth("APIKEY", {
    language: "language_code",
    redirect_url: "your_redirect_url",
    source: [
      { type: "email", feature: "magiclink" },
      { type: "phone", feature: "otp" },
    ],
  });
  return <div>Acc2</div>;
};

export default Acc2;
