import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/userSlice";

export default function PrivateRoute({ children, redirectTo}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        isLoggedIn ? children : <Navigate to={redirectTo} replace/>
    )
}