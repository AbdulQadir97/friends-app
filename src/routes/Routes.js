import { Routes as AppRoutes, Route, } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
return(
    <AppRoutes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </AppRoutes>

)
}

export default Routes;