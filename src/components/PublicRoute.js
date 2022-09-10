import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/userSlice";

export default function PublicRoute() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        !isLoggedIn ? <Outlet /> : <Navigate to='/contacts' replace/>
    )
}