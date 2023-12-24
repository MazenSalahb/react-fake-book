import { Outlet } from "react-router-dom";

export default function Layout({ setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <>
      <nav className="p-2">
        <button onClick={handleLogout} className="btn btn-outline-primary">
          Logout
        </button>
      </nav>
      <Outlet />
    </>
  );
}
