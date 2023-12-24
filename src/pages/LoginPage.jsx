import faceBookImage from "../assets/facebook.svg";
import LoginForm from "./components/LoginForm";
import "./css/login.css";

export default function LoginPage({ setIsLoggedIn, showToast }) {
  return (
    <>
      <section>
        <div className="left-sec">
          <img src={faceBookImage} alt="fakebook logo" width={"320px"} />
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right-sec">
          <LoginForm setIsLoggedIn={setIsLoggedIn} showToast={showToast} />
          <p className="new-pg">
            <a href="#">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>
      </section>
      <footer className="text-secondary">no need to Enter real data 💙</footer>
    </>
  );
}
