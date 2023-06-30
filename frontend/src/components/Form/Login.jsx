import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setLoginStatus("Login successful");
        // Clear form inputs
        setEmail("");
        setPassword("");
      } else {
        setLoginStatus("Login failed");
      }
    } catch (error) {
      setLoginStatus("Error occurred during login");
      console.error(error);
    }
  };

  setTimeout(()=>{window.location.href="/home"}, 10000)

  return (
    <div className="flex justify-center items-center mb-[5rem] mt-[4rem]">
      <div className="form-ctn">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col justify-center">
            <div className="mt-[1.5rem] flex flex-col justify-center items-center">
              <h1>Login</h1>

              <p>Please enter your credentials to log in.</p>
            </div>

            <label className="mt-[1.5rem]" htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

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

            <label className="mt-[1.5rem]" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>{loginStatus}</p>

            <div className="mt-[1.5rem] flex flex-col justify-center items-center">
              <button type="submit" className="form-btn">
                Login
              </button>
            </div>
          </div>

          <div className="mt-[1.5rem] pb-[3rem] flex flex-col items-center justify-center">
            <p>
              Do not have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
