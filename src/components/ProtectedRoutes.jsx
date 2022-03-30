import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

  const userName = useSelector(state => state.userName);

  return userName ? <Outlet /> : <Navigate to='/' />

};

export default ProtectedRoutes;