import { Routes as AppRoutes, Route, } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

const Routes = () => {
return(
    <AppRoutes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/settings" element={<Setting />} />
    </AppRoutes>

)
}

export default Routes;