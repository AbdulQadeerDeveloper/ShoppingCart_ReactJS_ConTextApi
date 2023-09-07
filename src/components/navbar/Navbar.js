import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    toast.success("Logged out successfully!"); // Show a success notification when logging out
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isAuthenticated) {
    toast.success(`Welcome, ${user.email}!`); // Show a welcome notification when logging in
  }

  return (
    <div className="nav">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {isAuthenticated && <NavLink to="/cart">Cart</NavLink>}
      </div>
      <div className="user-info">
        {isAuthenticated ? (
          <>
            <p>Welcome, {user.email}</p>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <button className="login-button" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
