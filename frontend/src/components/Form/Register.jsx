import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setRegistrationStatus("Passwords do not match");
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setRegistrationStatus("Registration successful");
        // Clear form inputs
        setUsername("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      } else {
        setRegistrationStatus("Registration failed");
      }
    } catch (error) {
      setRegistrationStatus("Error occurred during registration");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <div className="flex flex-col">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
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

          <label htmlFor="repeat-password">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeat-password"
            id="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          <hr />
          <p>{registrationStatus}</p>
          <p>
            By creating an account you agree to our <a href="#">Terms & Privacy</a>.
          </p>

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;