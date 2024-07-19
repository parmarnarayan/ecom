import React from "react";
import Layout from "../component/Layout/Layout";

const Policypage = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="assete/images/privacy1.jpg"
            alt="privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy T&C</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">www.ecommerce.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policypage;
