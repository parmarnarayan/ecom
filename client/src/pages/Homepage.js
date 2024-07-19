import React from "react";
import Layout from "../component/Layout/Layout";
import { useAuth } from "../Context/auth";
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Homepage;
