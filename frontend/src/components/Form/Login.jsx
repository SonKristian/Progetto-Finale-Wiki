import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/register.css";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      console.log(userData);
      const response = await axios.post("http://localhost:3000/login", {
        ...userData,
      });

      if (response) {
        // console.log(response.data)
        setIsLoggedIn(true);
        // Store the login status in sessionStorage
        sessionStorage.setItem("jwtToken", response.data.token);
        sessionStorage.setItem("user", response.data.user);
        // Clear form inputs
        setEmail("");
        setPassword("");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      setIsLoggedIn("Error during Log in");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center mb-[5rem] mt-[4rem]">
      <div className="form-ctn">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col justify-center">
            <div className="mt-[1.5rem] flex flex-col justify-center items-center">
              <h1>Login</h1>
              <p>Please enter your credentials to log in.</p>
            </div>

            <label className="mt-[1.5rem]" htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="mt-[1.5rem]  flex justify-between " htmlFor="password">
              <b>Password</b>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-[1.5rem] flex flex-col justify-center items-center">
                <button type="submit" className="form-btn">
                  Login
                </button>
      
              </div>
  
          <div className="mt-[1.5rem] pb-[3rem] flex flex-col items-center justify-center">
            <p>
              Do not have an account? <Link to="/register"><u className="text-white">Register</u></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
