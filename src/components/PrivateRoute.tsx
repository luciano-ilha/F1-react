import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  element: React.ComponentType;
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('userId')

  return isAuthenticated ? (<Component {...rest} />) : (<Navigate to="/login" />)
}

export default PrivateRoute
