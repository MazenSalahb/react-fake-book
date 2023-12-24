import { useEffect } from "react";
import { redirect } from "react-router-dom";

export default function HomePage({ showToast }) {
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      console.log("not logged in");
    }
  }, []);
  return <h1>Home Page</h1>;
}
