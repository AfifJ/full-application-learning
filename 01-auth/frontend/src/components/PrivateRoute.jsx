import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const {useInfo} = useSelector(state => state.auth)
  return (
    useInfo ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute 