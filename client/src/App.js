import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Policypage from "./pages/Policypage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Registerpage from "./pages/Auth/Registerpage";
import Loginpage from "./pages/Auth/loginpage";
import Pagenotfound from "./pages/Pagenotfound";
import Dashbord from "./pages/User/Dashbord";
import PrivateRoute from "./component/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashbord" element={<PrivateRoute />}>
          <Route path="" element={<Dashbord />} />
        </Route>

        <Route path="/policy" element={<Policypage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
