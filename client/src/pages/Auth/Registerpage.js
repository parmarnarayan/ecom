import React, { useState } from "react";
import Layout from "./../../component/Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [output, setOutput] = useState();
  //form function
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
      };
      const res = await axios.post("/api/v1/auth/register", userDetails);
      setOutput(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else toast.error(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register -Ecommerce.com"}>
      <div className="form-container">
        <h4 className="title">REGISTER FORM</h4>
        <font style={{ color: "green" }}>{output}</font>
        <form onSubmit={handleSumbit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputname"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputemail"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputpassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputphone"
              placeholder="Enter Your Phone"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputaddress"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Registerpage;
