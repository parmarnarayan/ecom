import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth";

const Loginpageog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState();
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  //form function
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = { email: email, password: password };
      const res = await axios.post("/api/v1/auth/login", userDetails);
      setOutput(res.data.message);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else toast.error(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Login -Ecommerce.com"}>
      <div className="form-container">
        <h4 className="title">LOGIN</h4>
        <font style={{ color: "green" }}>{output}</font>
        <form onSubmit={handleSumbit}>
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

          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Loginpageog;
