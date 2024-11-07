import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Moosocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Moosocial.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="First Name" className="registerInput" />
            <input placeholder="Last Name" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Confirm Password" className="registerInput" />
            <button className="loginButton">Sign Up</button>

            <button className="registerButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
