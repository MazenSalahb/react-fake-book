import { BrowserRouter, Route, Routes } from "react-router-dom";
import facebookLogo from "./assets/facebook_logo.png";
import "./css/App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const showToast = (msg) => {
    setToastMsg(msg);
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn && <Layout setIsLoggedIn={setIsLoggedIn} />}
          >
            <Route
              index
              element={
                isLoggedIn ? (
                  <HomePage showToast={showToast} />
                ) : (
                  <LoginPage
                    setIsLoggedIn={setIsLoggedIn}
                    showToast={showToast}
                  />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img
              src={facebookLogo}
              className="rounded me-2"
              alt="facebook logo"
              width={20}
            />
            <strong className="me-auto">Fakebook</strong>
            <small>Just Now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{toastMsg}</div>
        </div>
      </div>
    </>
  );
}

export default App;
