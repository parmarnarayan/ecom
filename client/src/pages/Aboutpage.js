import React from "react";
import Layout from "./../component/Layout/Layout";
//import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Aboutpage = () => {
  return (
    <Layout title={"About Us-Ecommerce.com"}>
      <div className="row aboutus ">
        <div className="col-md-6 ">
          <img
            src="assete/images/aboutus4.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Our Products</h1>
          <p className="text-justify mt-2">
            E-commerce is the buying and selling of goods and services over the
            internet. It is conducted over computers, tablets, smartphones, and
            other smart devices. Almost anything can be purchased through
            e-commerce today, which makes e-commerce highly competitive.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Aboutpage;
