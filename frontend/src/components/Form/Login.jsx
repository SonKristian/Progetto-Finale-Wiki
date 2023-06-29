import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col">
          <h1>Login</h1>
          <p>Please enter your credentials to log in.</p>
          <hr />

            <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <hr />
          <p>{loginStatus}</p>

          <button type="submit" className="loginbtn">
            Login
          </button>
        </div>

        <div className="container signin">
          <p> Do not have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
